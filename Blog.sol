// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Blog {
    struct Post {
        address _author;
        string _title;
        string _content;
        bool _status;
    }

    Post[] posts;

    function addBlog(string memory _title, string memory _content, bool _status) public {
        posts.push(Post(msg.sender, _title, _content, _status));
    }

    function getPostsCount() public view returns(uint256) {
        return posts.length;
    }

    function getPostData(uint _index) public view returns(address, string memory, string memory, bool) {
        require(_index < posts.length, "Post not found.");
        return (
            posts[_index]._author,
            posts[_index]._title,
            posts[_index]._content,
            posts[_index]._status
        );
    }
}