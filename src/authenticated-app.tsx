import React from "react";
import { ProjectListScreen } from "screens/project-list";
import { useAuth } from "context/auth-context";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import styled from "@emotion/styled";
import { Row } from "components/lib";
import { Button, Dropdown, Menu } from "antd";

/**
 * gird 和 flex 各自的应用场景
 * 1. 要考虑 是一维布局 还是二维布局
 *    一般来说，一维布局使用flex，二位布局使用gird
 * 2. 是从内容出发还是从布局出发
 *    出内容出发：你先有一组内容（数量一般不固定），然后希望它们均匀地分布在容器中，由内容的大小自己决定占据的空间
 *    出布局出发：先规划网格（数量一般比较固定），然后再把元素往里填充
 *    从内容出发，用flex
 *    从布局出发，用gird
 */

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key={"logout"}>
                  <Button type={"link"} onClick={logout}>
                    登出
                  </Button>
                </Menu.Item>
              </Menu>
            }
          >
            <Button type={"link"} onClick={(e) => e.preventDefault()}>
              hi, {user?.nickName}
            </Button>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  height: 100vh;
`;

// grid-area 用来给grid子元素起名字
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;

const Main = styled.main``;
