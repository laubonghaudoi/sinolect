import React from "react"
import { css } from "@emotion/core"
import { 
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Segment
} from "semantic-ui-react"
import { Link } from 'gatsby'
import { rhythm } from "../utils/grandViewTypography"
import PageLayout from "./PageLayout";

export default ({ children }) => {
  return (  
    <PageLayout
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Grid container stackable>
        <Grid.Row>
          <Segment basic>
            <Header as="h1" size="massive">
              <Header.Content>
              <Button 
                color='violet' 
                as={Link}
                to='/blog'
                >
                <Icon name='arrow left'/>
                  文章列表
              </Button>{" "}
              </Header.Content>
            </Header>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={11}>
            {children}
            <Container
              style={{
                margin:'4em'
              }}
            >          
              <Button
                floated='right'
                color='violet' 
                as={Link}
                to='/blog'
              >
                <Icon name='arrow up'/>
                返頂
              </Button>
              <Divider style={{ paddingBottom: '4rem' }}/>
            </Container>
          </Grid.Column>
          <Grid.Column width={4} floated="right">
            <Segment secondary>
              <Header as="h4">杂谈</Header>
              <p>
              本板块将连载各种关于汉语方言拼音的资料和文章，帮助读者了解汉语方言拼音的知识。
              </p>
            </Segment>
            <Header as="h4">Archives</Header>
            <List>
              <List.Item as="a">Septempber 2017</List.Item>
              <List.Item as="a">August 2017</List.Item>
              <List.Item as="a">June 2017</List.Item>
              <List.Item as="a">April 2017</List.Item>
            </List>
            <Header as="h4">Elsewhere</Header>
            <List>
              <List.Item as="a">Github</List.Item>
              <List.Item as="a">Twitter</List.Item>
              <List.Item as="a">Facebook</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </PageLayout>
  )
}