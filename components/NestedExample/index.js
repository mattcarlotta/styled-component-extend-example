import styled from "styled-components";
import { nest } from "../../utils";

const Article = styled.article`
  tex-align: center;
`;

const Container = styled.section`
  width: 200px;
  padding: 24px;
  border: 1px solid #4fadff;
`;

const Content = styled.p`
  background: #4fadff;
  color: white;
  padding: 10;
`;

const Post = nest(Article, Container, Content);

export default Post;
