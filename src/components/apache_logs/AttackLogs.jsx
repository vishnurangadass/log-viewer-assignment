import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../common/Search";
import Spinner from "../common/Spinner";
import Pagination from "../common/Pagination";

function Attacklogs() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8002/apache-attack-logs").then((res) => {
      setPosts(res.data);
    });
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.level.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {currentPosts.length > 0 ? (
        <>
          <ul>
            {currentPosts.map((post) => {
              let color;
              switch (post.level) {
                case "INFO":
                  color = "#0079FF";
                  break;
                case "ERROR":
                  color = "#E72929";
                  break;
                case "WARN":
                  color = "#FCDC2A";
                  break;
                default:
                  color = "inherit";
              }
              return (
                <p key={post.id} style={{ color: color }}>
                  {post.ip} {post.timestamp} {post.level} {post.method}{" "}
                  {post.path} {post.protocol} {post.response_code}{" "}
                  {post.response_size} {post.user_message}{" "}
                </p>
              );
            })}
          </ul>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={filteredPosts.length}
            paginate={paginate}
          />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Attacklogs;
