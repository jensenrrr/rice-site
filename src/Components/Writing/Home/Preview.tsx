import React, { FC } from "react";
import { BookInfo } from "../books";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
`;

const Preview: FC<BookInfo> = ({ name, title, genre, status, summary }) => {
  return (
    <Wrapper className="max-w-2xl rounded-md p-6 mt-8 mx-auto space-y-3">
      <div>
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-lg text-blue-500">{genre}</div>
        <div>{status}</div>
      </div>
      <div>{summary}</div>
      <Link to={`/Writing/${name}/1`}>
        <div className="flex-shrink-0 mx-auto w-36 mt-5 bg-blue-500 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
          Read Book
        </div>
      </Link>
    </Wrapper>
  );
};

export default Preview;
