import styled from "styled-components";
import { nest } from "../../utils";

const Article = styled.article`
  tex-align: center;
`;

const Container = styled.section`
  width: 200px;
  padding: 24px;
  border: 1px solid blue;
`;

const Content = styled.p`
  background: blue;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Post = nest(Article, Container, Content);

export default Post;
