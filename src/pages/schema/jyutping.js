import React, { Component } from 'react'

import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  Label,
  Message,
  Menu,
  Table,
  GridColumn,
  Tab
} from "semantic-ui-react";

import { rhythm } from "../../utils/grandViewTypography"
import SchemaPageLayout from '../../layouts/SchemaPageLayout'

class Jyutping extends Component {
  render(){
    return(
      <SchemaPageLayout
        activeItem='jyutping'
        >
        <Header dividing size="huge" as="h1">
          粤拼
        </Header>
        <Message>
          <Grid columns={2} stackable>
            <Divider vertical><Icon name="map"></Icon></Divider>
            <Grid.Column>
              <Header 
                size="big"
                as="h2"
                color="blue"
                textAlign="right"
                style={{
                  display:'inline-block',
                  marginBottom: rhythm(0.5),
                }}>
                简介
              </Header>
              <p>
                粤拼全稱「香港語言學學會粵語拼音方案」，亦稱LSHK粵拼。是香港語言學學會於1993年定案的粵語拼音方案。其特點是完全使用ASCII字符，用數字表示聲調，設計科學合理。是目前最通用的粵語拼音方案。
              </p>
              <ul>
                <li>官方頁面：<a href="https://www.lshk.org/jyutping">Jyutping 粵拼 | lshk</a></li>
                <li>℞ 所屬配方名稱：<code>rime/rime-cantonese</code></li>
              </ul>
            </Grid.Column>
            
            <Grid.Column>
              <Header 
                size="big"
                as="h2"
                color="blue"
                textAlign="right"
                style={{
                  display:'inline-block',
                  marginBottom: rhythm(0.5),
                }}>
                目錄
              </Header>
            </Grid.Column>
          </Grid>
        </Message>

        <Header dividing size="large" as="h2">
          聲母
        </Header>
        粵拼中共有19個聲母，無清濁對立，無腭化音。
        <Table celled definition unstackable textAlign='center'>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>脣音</Table.HeaderCell>
              <Table.HeaderCell>脣齒音</Table.HeaderCell>
              <Table.HeaderCell>齒齦音</Table.HeaderCell>
              <Table.HeaderCell>齦顎音</Table.HeaderCell>
              <Table.HeaderCell>硬齶音</Table.HeaderCell>
              <Table.HeaderCell>軟齶音</Table.HeaderCell>
              <Table.HeaderCell>喉音</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>塞音</Table.Cell>
              <Table.Cell>b <ipa>[p]</ipa> 巴<br/>p <ipa>[pʰ]</ipa>  怕</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>d <ipa>[t]</ipa> 打<br/>t <ipa>[tʰ]</ipa>  他</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>g <ipa>[k]</ipa> 家<br/>k  <ipa>[kʰ]</ipa>  卡<br/>gw <ipa>[kʷ]</ipa> 瓜<br/>kw  <ipa>[kʷ]</ipa>  夸</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>塞擦音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>z <ipa>[t͡s]</ipa>  渣<br/>c  <ipa>[t͡sʰ]</ipa>  叉</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>鼻音</Table.Cell>
              <Table.Cell>m <ipa>[m]</ipa> 媽</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>n <ipa>[n]</ipa> 那</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ng  <ipa>[ŋ]</ipa> 牙</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>擦音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>f <ipa>[f]</ipa> 花</Table.Cell>
              <Table.Cell>s <ipa>[s]</ipa> 沙</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>h <ipa>[h]</ipa> 蝦</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>近音</Table.Cell>
              <Table.Cell>w <ipa>[w]</ipa> 蛙</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>j <ipa>[j]</ipa> 也</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>邊近音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>l <ipa>[l]</ipa> 啦</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Header dividing size="big" as="h3">
          鼻音單獨成韻
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
          <Table textAlign="center">
            <Table.Row>
              <Table.Cell>m <ipa>[m]</ipa> 唔</Table.Cell>
              <Table.Cell>ng <ipa>[ŋ]</ipa> 吳</Table.Cell>
            </Table.Row>
          </Table>
          </Grid.Column>
        </Grid>

        <Header dividing size="large" as="h2">
          韻母
        </Header>
        <Header dividing size="big" as="h3">
          介音
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Message>粵語無介音</Message>
          </Grid.Column>
        </Grid>

        <Header dividing size="big" as="h3">
          韻腹
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Table celled unstackable textAlign='center'>
              <Table.Row>
                <Table.Cell>i <ipa>[i]</ipa> 詩<br/>yu <ipa>[y]</ipa> 書</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>u <ipa>[u]</ipa> 夫</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>e <ipa>[e]</ipa> 姐<br/>eo <ipa>[ø]</ipa> 水</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>oe <ipa>[œ]</ipa> 削</Table.Cell>
                <Table.Cell>a <ipa>[ɐ]</ipa> 不</Table.Cell>
                <Table.Cell>o <ipa>[ɔ]</ipa> 波</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell></Table.Cell>
                <Table.Cell>aa <ipa>[a]</ipa> 花</Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            </Table>
          </Grid.Column>
          <Grid.Column>
            粵語共有9個韻腹。
          </Grid.Column>
        </Grid>
        <Header dividing size="big" as="h3">
          韻尾
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
          <Table celled definition unstackable textAlign='center'>
            <Table.Row>
              <Table.Cell>塞音（入聲）</Table.Cell>
              <Table.Cell>p <ipa>[p̚]</ipa> 溼</Table.Cell>
              <Table.Cell>t <ipa>[t̚]</ipa> 失</Table.Cell>
              <Table.Cell>k <ipa>[k̚]</ipa> 塞</Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>鼻音</Table.Cell>
              <Table.Cell>m <ipa>[m]</ipa> 心</Table.Cell>
              <Table.Cell>n <ipa>[n]</ipa> 身</Table.Cell>
              <Table.Cell>ng <ipa>[ŋ]</ipa> 生</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>元音/半元音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>i <ipa>[i]</ipa> 西</Table.Cell>
              <Table.Cell>u <ipa>[u]</ipa> 收</Table.Cell>
            </Table.Row>
          </Table>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid>

        <Header dividing size="big" as="h3">
          韻母表
        </Header>
        <Table celled definition unstackable textAlign='center'>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>單元音</Table.HeaderCell>
              <Table.HeaderCell colSpan='2'>複元音</Table.HeaderCell>
              <Table.HeaderCell colSpan='3'>鼻音</Table.HeaderCell>
              <Table.HeaderCell colSpan='3'>塞音（入聲韻）</Table.HeaderCell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.HeaderCell>韻</Table.HeaderCell>
              <Table.HeaderCell>-</Table.HeaderCell>
              <Table.HeaderCell>-i</Table.HeaderCell>
              <Table.HeaderCell>-u</Table.HeaderCell>
              <Table.HeaderCell>-m</Table.HeaderCell>
              <Table.HeaderCell>-n</Table.HeaderCell>
              <Table.HeaderCell>-ng</Table.HeaderCell>
              <Table.HeaderCell>-p</Table.HeaderCell>
              <Table.HeaderCell>-t</Table.HeaderCell>
              <Table.HeaderCell>-k</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>aa</Table.Cell>
              <Table.Cell>aa</Table.Cell>
              <Table.Cell>aai</Table.Cell>
              <Table.Cell>aau</Table.Cell>
              <Table.Cell>aam</Table.Cell>
              <Table.Cell>aan</Table.Cell>
              <Table.Cell>aang</Table.Cell>
              <Table.Cell>aap</Table.Cell>
              <Table.Cell>aat</Table.Cell>
              <Table.Cell>aak</Table.Cell> 
            </Table.Row>
            <Table.Row>
              <Table.Cell>aa</Table.Cell>
              <Table.Cell>\</Table.Cell>
              <Table.Cell>ai</Table.Cell>
              <Table.Cell>au</Table.Cell>
              <Table.Cell>am</Table.Cell>
              <Table.Cell>an</Table.Cell>
              <Table.Cell>ang</Table.Cell>
              <Table.Cell>ap</Table.Cell>
              <Table.Cell>at</Table.Cell>
              <Table.Cell>ak</Table.Cell> 
            </Table.Row>
            <Table.Row>
              <Table.Cell>e</Table.Cell>
              <Table.Cell>e</Table.Cell>
              <Table.Cell>ei</Table.Cell>
              <Table.Cell>eu</Table.Cell>
              <Table.Cell>em</Table.Cell>
              <Table.Cell>\</Table.Cell>
              <Table.Cell>eng</Table.Cell>
              <Table.Cell>ep</Table.Cell>
              <Table.Cell>et</Table.Cell>
              <Table.Cell>ek</Table.Cell> 
            </Table.Row>
            <Table.Row>
              <Table.Cell>i</Table.Cell>
              <Table.Cell>i</Table.Cell>
              <Table.Cell>\</Table.Cell>
              <Table.Cell>iu</Table.Cell>
              <Table.Cell>im</Table.Cell>
              <Table.Cell>in</Table.Cell>
              <Table.Cell>ing</Table.Cell>
              <Table.Cell>ip</Table.Cell>
              <Table.Cell>it</Table.Cell>
              <Table.Cell>ik</Table.Cell> 
            </Table.Row>
            <Table.Row>
              <Table.Cell>yu</Table.Cell>
              <Table.Cell>yu</Table.Cell>
              <Table.Cell>\</Table.Cell>
              <Table.Cell>\</Table.Cell>
              <Table.Cell>\</Table.Cell>
              <Table.Cell>yun</Table.Cell>
              <Table.Cell>\</Table.Cell>
              <Table.Cell>\</Table.Cell>
              <Table.Cell>yut</Table.Cell>
              <Table.Cell>\</Table.Cell> 
            </Table.Row>
          </Table.Body>
        </Table>

        <Header dividing size="large" as="h3">
          聲調
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Table textAlign="center">
              <Table.Row>
                <Table.Cell>1 陰平 <ipa>[˥˥]</ipa> 詩</Table.Cell>
                <Table.Cell>2 陰上 <ipa>[˧˥]</ipa> 史</Table.Cell>
                <Table.Cell>3 陰去 <ipa>[˧˧]</ipa> 試</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4 陽平 <ipa>[˨˩]</ipa> 時</Table.Cell>
                <Table.Cell>5 陽上 <ipa>[˩˧]</ipa> 市</Table.Cell>
                <Table.Cell>6 陽去 <ipa>[˨˨]</ipa> 事</Table.Cell>
              </Table.Row>
            </Table>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid>

        <Header dividing size="large" as="h2">
          參考資料
        </Header>
        https://www.lshk.org/jyutping
      </SchemaPageLayout>
    )
  }
}

export default Jyutping