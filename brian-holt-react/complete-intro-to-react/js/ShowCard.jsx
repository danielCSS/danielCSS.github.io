// @flow

import React from "react";
import { Link } from "react-router-dom";
// removed because we're using flowtype
// import { shape, string } from "prop-types";
import styled from "styled-components";

const color = "#333";
const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid ${color};
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: #111;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = (props: { show: Show }) => (
  <Wrapper to={`details/${props.show.imdbID}`}>
    <Image
      src={`/public/img/posters/${props.show.poster}`}
      alt={`${props.show.title} Show Poster`}
    />
    <div>
      <h3>{props.show.title}</h3>
      <h4>({props.show.year})</h4>
      <p>{props.show.description}</p>
    </div>
  </Wrapper>
);

// const ShowCard = props => (
//   <Wrapper>
//     <Image
//       src={`/public/img/posters/${props.show.poster}`}
//       alt={`${props.show.title} Show Poster`}
//     />
//     <h3>{props.show.title}</h3>
//     <h4>({props.show.year})</h4>
//     <p>{props.show.description}</p>
//   </Wrapper>
// );
//
// ShowCard.propTypes = {
//   show: shape({
//     poster: string.isRequired,
//     title: string.isRequired,
//     year: string.isRequired,
//     description: string.isRequired
//   }).isRequired
// };

export default ShowCard;
