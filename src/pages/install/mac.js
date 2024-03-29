import React, { Component } from 'react';
import {
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Message,
  Table,
} from 'semantic-ui-react';

import { Link } from 'gatsby';
import RecipeList from '../../components/RecipeList';
import InstallPageLayout from '../../layouts/InstallPageLayout';

class MacInstallPage extends Component {
  state = {
    activeItem: 'account',
    focus: {
      step1: false,
      step2a: false,
      step2b: false,
      step3: false,
    }
  };

  handleItemClick = (_e, { name }) => {
    return this.setState({ activeItem: name });
  }
  handleUpdate = (_e, { calculations }) => this.setState({ calculations });

  render() {
    const { activeItem } = this.state
    return (
      <InstallPageLayout
        activeItem='mac'
      >
        <Grid columns='equal' padded stackable>
          <Grid.Column width={13}>
            <Header textAlign='center' size="Massive" as="h1">
              <Header.Content>macOS安装部署教程</Header.Content>
              <Header.Subheader>
                以Mojave 10.14为例
              </Header.Subheader>
            </Header>
            <p>如概述所說，安裝過程只有兩步：</p>
            <List ordered>
              <List.Item>安装鼠须管输入法</List.Item>
              <List.Item>部署方言拼音方案</List.Item>
            </List>
            <p>本章就以Mojave 10.14系統為例手把手教你如何操作。</p>

            <Divider style={{ paddingBottom: '4rem' }} id='step1' />

            <Header textAlign='center' size="huge" as="h2" style={{ paddingBottom: '1rem' }}>
              <Header.Content>第一步 安装鼠须管输入法</Header.Content>
            </Header>
            <Table structured padded inverted
            // style={{
            //   backgroundColor: '#7BC2FB',
            //   color:'black',
            // }}
            >
              <Table.Header
              //   style={{
              //   backgroundColor: '#7BC2FB',
              //   color:'black',
              //   borderRadius: '200px',
              // }}
              >
                <Table.Row>
                  <Table.Cell textAlign='center'><strong>序</strong></Table.Cell>
                  <Table.Cell textAlign='center'><strong>操作</strong></Table.Cell>
                </Table.Row>
              </Table.Header>
              <Table.Row>
                <Table.Cell rowspan='2'>1</Table.Cell>
                <Table.Cell>
                  首先前往<a href="https://rime.im">中州韻官网</a>，下载鼠须管输入法
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac1_1.png' fluid />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>2</Table.Cell>
                <Table.Cell>
                  下載完成後，雙擊安裝
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image.Group>
                    <Image size='tiny' src='/mac/mac1_2a.png' fluid />
                    <Image size='large' src='/mac/mac1_2b.png' fluid />
                  </Image.Group>

                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>3</Table.Cell>
                <Table.Cell>
                  安装过程中会提醒安装完成后需要注销并重新登录
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac1_3.png' fluid />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>4</Table.Cell>
                <Table.Cell>
                  安装成功后，注销并重新登录
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='large' src='/mac/mac1_4.png' fluid />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>5</Table.Cell>
                <Table.Cell>
                  点击右上角切换输入法，发现已成功安装了鼠须管
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='large' src='/mac/mac1_5.png' fluid />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>6</Table.Cell>
                <Table.Cell>
                  尝试打几个字，可以见到安装成功，且输入的是繁体中文
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='large' src='/mac/mac1_6.png' fluid />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>7</Table.Cell>
                <Table.Cell>
                  怎么切换成简体字输入呢？只需要按下<kbd>Ctrl</kbd>和<kbd>`</kbd>（数字1左边那个键，和波浪号~相同）这两个键，就会弹出一个设置菜单
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/mac/mac1_7.png' fluid />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>8</Table.Cell>
                <Table.Cell>
                  可以看到按1、3、4、5都是选择不同的输入方案，按2则进入格式设置
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/mac/mac1_8.png' fluid />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>9</Table.Cell>
                <Table.Cell>
                  可以看到不只有简繁体切换，还有全半角和中英文切换，按下<kbd>4</kbd>，然后就可以用简体字输入了
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/mac/mac1_9.png' fluid />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>
                  到這裏第一步就完成了。你可以直接使用鼠須管輸入法中的普通話拼音、倉頡來打字。要啓用漢語方言拼音，
                </Table.Cell>
              </Table.Row>
            </Table>

            <Divider style={{ paddingBottom: '4rem' }} id='step2a' />

            <Header textAlign='center' size="huge" as="h2" style={{ paddingBottom: '1rem' }}>
              <Header.Content>第二步 快捷啟用拼音方案</Header.Content>
              <Header.Subheader>
                僅限部分語言
              </Header.Subheader>
            </Header>
            <Message info>
              <p><Icon name='info circle' />
                如果你的想輸入的語言<strong>在下方列表中</strong>，可繼續閱讀本節快速啓用方言拼音，<strong>否則直接<Link to='/install/linux/#step2b'>跳到下一節</Link></strong>使用通用方法部署拼音方案。</p>
              <p>下面列表中每一行的格式都是是<code>語言名：方案名稱 方案代號</code>，有的語言例如潮汕話，是多個方音共用一個方案代號 <code>Kahaani/dieghv</code>。找到自己語言的方案名稱和代號之後按以下步驟啓用方案。</p>
            </Message>
            <RecipeList />
            <Table structured inverted padded>
              <Table.Header>
                <Table.Row>
                  <Table.Cell textAlign='center'><strong>序</strong></Table.Cell>
                  <Table.Cell textAlign='center'><strong>操作</strong></Table.Cell>
                </Table.Row>
              </Table.Header>
              <Table.Row>
                <Table.Cell rowspan='2'>1</Table.Cell>
                <Table.Cell>
                  <p>打開終端，運行以下命令：</p>
                  <p><code>curl -fsSL https://git.io/rime-install | bash</code></p>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {/* <Image size='medium' src='/mac/mac1_12_2a_1.png' fluid/> */}
                  注意如果提示未安裝git，需要先安裝git
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>2</Table.Cell>
                <Table.Cell>
                  <p>然後運行以下命令，安裝你想要的方言拼音方案：</p>
                  <p><code>cd plum</code><br />
                    <code>bash rime-install NGLI/rime-wugniu_soutseu</code></p>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  這裏以蘇州話爲例，因此上面的方案代號是<code>NGLI/rime-wugniu_soutseu</code>，自行把這個代號替換爲你想安裝的方案代號。例如你要安裝粵語拼音，那第二項命令就是
                  <code>bash rime-install cantonese</code>
                  {/* <Image size='big' src='/mac/mac2a_2.png' fluid/> */}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>3</Table.Cell>
                <Table.Cell>
                  這時界面會開始下載你的方案。安裝完成後，把<code></code>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='big' src='/mac/mac2a_3.png' fluid />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>4</Table.Cell>
                <Table.Cell>
                  然後把你想輸入的語言的方案代號複製進去，再按回車。例如要輸入廣州話，則複製<code>jyutping</code>再按回車，然後可以見到方案部署成功
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='big' src='/mac/mac2a_4.png' fluid />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>5</Table.Cell>
                <Table.Cell>
                  關閉命令行界面，回到鼠須管設定界面，可以見到方案列表可以勾選拼音方案了
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='big' src='/mac/mac2a_5.png' fluid />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>6</Table.Cell>
                <Table.Cell>
                  點“中”完成配置後，重複剛纔的步驟按<code>Ctrl</code>和<code>`</code> （數字1左邊那個鍵，和波浪號~相同）兩個鍵，選擇粵拼方案，就可以打廣州話拼音了！
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image.Group size='medium'>
                    <Image src='/mac/mac2a_6a.png' fluid />
                    <Image src='/mac/mac2a_6b.png' fluid />
                  </Image.Group>
                </Table.Cell>
              </Table.Row>
            </Table>
            <Message info>
              请直接<Link to='/install/mac/#wrapup'>跳到「小结」</Link>一节继续教程。
            </Message>

            <Divider style={{ paddingBottom: '4rem' }} id='step2b' />

            <Header textAlign='center' size="huge" as="h2" style={{ paddingBottom: '1rem' }}>
              <Header.Content>第二步  部署方言拼音方案</Header.Content>
              <Header.Subheader>
                通用方法
              </Header.Subheader>
            </Header>
            <Table structured inverted padded>
              <Table.Header>
                <Table.Row>
                  <Table.Cell textAlign='center'><strong>序</strong></Table.Cell>
                  <Table.Cell textAlign='center'><strong>操作</strong></Table.Cell>
                </Table.Row>
              </Table.Header>
              <Table.Row>
                <Table.Cell rowspan='2'>1</Table.Cell>
                <Table.Cell>
                  首先點擊<a href="">這裏</a>下載最新版的漢語方言拼音方案合集，打開壓縮包可以看到裏面有一個<code>default.custom.yaml</code>和<code>default.yaml</code>文件（這兩個文件是給其他平臺用戶的，我們macdows忽略它就行了）和以各大方言區命名的文件夾。
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac2b_1.png' fluid />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>2</Table.Cell>
                <Table.Cell>
                  我們這裏以蘇州話爲例，打開吳語/蘇州話，可以看見裏面有兩個文件：wugniu_soutseu.dict.yaml和wugniu_soutseu.schema.yaml，如下圖，這就是我們要的拼音方案了。（如果你好奇這兩個文件是什麼來的，看這裏）
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac2b_2.png' fluid />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>3</Table.Cell>
                <Table.Cell>
                  點擊右上角的鼠須管圖標，可以看到彈出一個菜單，點擊“用戶設定”
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/mac/mac2b_3.png' fluid />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>4</Table.Cell>
                <Table.Cell>
                  這時會自動打開一個文件夾，然後把剛纔的<code>default.custom.yaml</code>和<code>wugniu_soutseu.dict.yaml</code>和<code>wugniu_soutseu.schema.yaml</code>和這三個文件複製到這個文件夾內
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac2b_4.png' fluid />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>5</Table.Cell>
                <Table.Cell>
                  打開剛纔複製進來的下的default.custom.yaml文件，可以見到裏面有一些配置語句
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac2b_5.png' />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>6</Table.Cell>
                <Table.Cell>
                  在<code>schema-list:</code>的那一塊的後面加上一行字：<code> - schema: ID</code>（保持縮進對齊），其中把裏面的ID替換成你的方案id，也就是<code>.schema.yaml</code>文件的文件名。例如我們這裏用的是蘇州話，所以就加上了<code>- schema: wugniu_soutseu</code>，如下圖
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac2b_6.png' />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>7</Table.Cell>
                <Table.Cell>
                  保存後關閉文件，點擊右上方的rime輸入法圖標，點“同步用戶數據”，然後點擊“重新部署”
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac2b_7_c1_3.png' />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>8</Table.Cell>
                <Table.Cell>
                  再按下<kbd>Ctrl</kbd>和<kbd>`</kbd>，可以發現蘇州話方案已經成功添加
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac2b_8.png' />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>9</Table.Cell>
                <Table.Cell>
                  嘗試打幾個字，可見部署成功，能用蘇州話拼音打字了
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac2b_9.png' />
                </Table.Cell>
              </Table.Row>
            </Table>

            <Divider style={{ paddingBottom: '4rem' }} id='wrapup' />

            <Header textAlign='center' size="huge" as="h2" style={{ paddingBottom: '1rem' }}>
              <Header.Content>小結</Header.Content>
            </Header>
            至此，我們終於實現了在macOS下的漢語方言拼音輸入。所以以後如果需要添加其他漢語方言的輸入方案，只需要記住以下三步就可以了
              <Message positive>
              <Header size="small">
                快捷方式（僅限部分語言）：
                </Header>
              <List as='ol'>
                <List.Item as='li' value='1.'>打開鼠須管輸入法設定界面，點“獲取更多輸入方案”</List.Item>
                <List.Item as='li' value='2.'>輸入方案代號後回車，直接下載部署拼音方案</List.Item>
                <List.Item as='li' value='3.'>回到界面勾選輸入方案</List.Item>
              </List>
              <Divider />
              <Header size="small">
                通用方式（適用於全部語言）：
                </Header>
              <List as='ol'>
                <List.Item as='li' value='1.'>複製後綴爲<code>.dict.yaml</code>和<code>.schema.yaml</code>的方案文件到用戶文件夾</List.Item>
                <List.Item as='li' value='2.'>用戶資料同步</List.Item>
                <List.Item as='li' value='3.'>鼠須管輸入法設定勾選方案</List.Item>
              </List>
            </Message>

            <Divider style={{ paddingBottom: '4rem' }} id='lookup' />

            <Header textAlign='center' size="huge" as="h2" style={{ paddingBottom: '1rem' }}>
              <Header.Content>但我只會普通話拼音，方言拼音該怎麼打？</Header.Content>
            </Header>
            <Table inverted structured padded>
              <Table.Header>
                <Table.Row>
                  <Table.Cell textAlign='center'><strong>序</strong></Table.Cell>
                  <Table.Cell textAlign='center'><strong>操作</strong></Table.Cell>
                </Table.Row>
              </Table.Header>
              <Table.Row>
                <Table.Cell rowspan='2'>1</Table.Cell>
                <Table.Cell>
                  鼠須管有一個很強大的拼音反查功能，如果你有個字只會普通話拼音，不知道他的方言拼音怎麼打，就按下<code>`</code> ，然後打這個字的普通話拼音，這樣就能像查字典一樣查到任何字的方言拼音了
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac_l.png'></Image>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>2</Table.Cell>
                <Table.Cell>
                  當然，最重要的還是學會自己母語方言的拼音。所有的漢語方言拼音普通話拼音一樣，很快就能掌握，如果你是母語者那就更輕鬆了。本站的<Link to='/schema'>拼音方案頁</Link>列出了所有方言拼音方案的介紹和教程。只需稍加練習，以後和老鄉親戚聊天就都能舒暢地打家鄉話啦
                </Table.Cell>
              </Table.Row>
            </Table>

            <Divider style={{ paddingBottom: '4rem' }} id='customize' />

            <Header textAlign='center' size="huge" as="h2" style={{ paddingBottom: '1rem' }}>
              <Header.Content>（可選）自定義鼠須管外觀</Header.Content>
            </Header>
            <Header size="large" as="h3">
              <Header.Content>更改候選詞數量</Header.Content>
            </Header>
            <Table inverted structured padded>
              <Table.Row>
                <Table.Cell rowspan='2'>1</Table.Cell>
                <Table.Cell>
                  點擊右上角的鼠須管圖標，可以看到彈出一個菜單，點擊“用戶設定”
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac_c1_1.png'></Image>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>2</Table.Cell>
                <Table.Cell>
                  这时会打开用户文件夹，用文本编辑器打开刚才的<code>default.custom.yaml</code>文件，把下面的<code>page_size: 5</code>改成<code>page_size: 10</code>（最多10个），然后保存文件
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac_c1_2.png' fluid></Image>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>3</Table.Cell>
                <Table.Cell>
                  點擊右上方的rime輸入法圖標，點“同步用戶數據”，然後點擊“重新部署”
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac2b_7_c1_3.png'></Image>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>4</Table.Cell>
                <Table.Cell>
                  嘗試打幾個字，可見候選詞數量已經增加到10個
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac_c1_4.png'></Image>
                </Table.Cell>
              </Table.Row>
            </Table>
            <Header size="large" as="h3">
              <Header.Content>橫排顯示</Header.Content>
            </Header>
            <Header size="large" as="h3">
              <Header.Content>高級定製</Header.Content>
            </Header>
            <Message info>
              鼠須管是一個非常強大的輸入法，可以任意配置最適合自己的輸入方案，詳情請參考Rime官網的<a href='https://github.com/rime/home/wiki/CustomizationGuide'>定製指南</a>。
            </Message>
          </Grid.Column>

          <Grid.Column width={3}>
            <Menu
              vertical
              text
              style={{
                position: 'fixed',
                width: '14em',
                marginLeft: '1em'
              }}
            >
              <Menu.Item
                name='step1'
                active={activeItem === 'step1'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/mac/#step1'
              >
                1 安装鼠須管
              </Menu.Item>
              <Menu.Item
                name='step2a'
                active={activeItem === 'step2a'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/mac/#step2a'
              >
                2a 快捷启用方案
              </Menu.Item>
              <Menu.Item
                name='step2b'
                active={activeItem === 'step2b'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/mac/#step2b'
              >
                2b 部署方案
              </Menu.Item>
              <Menu.Item
                name='step3'
                active={activeItem === 'wrapup'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/mac/#wrapup'
              >
                小結
              </Menu.Item>
              <Menu.Item
                name='step3'
                active={activeItem === 'lookup'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/mac/#lookup'
              >
                拼音反查
              </Menu.Item>
              <Menu.Item
                name='step3'
                active={activeItem === 'customize'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/mac/#customize'
              >
                自定義外觀
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>
      </InstallPageLayout >
    )
  }
}

export default MacInstallPage;
