import React, { ReactNode } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { TestProviders } from '../../Providers/TestProviders';
import SidebarWrapper from './SidbarWrapper';
import SidebarAbout from './SidebarAbout';
import SidebarTree from './SidebarTree';
import SidebarSearch from './SidebarSearch';
import SidebarProfile from './SidebarProfile';
import { treeData } from '../../assets/stories-data';
import { useRouter } from 'next/router';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Sidebar',
};

const Template: Story<{
  children: ReactNode;
  isLoading?: boolean;
  title?: string;
  match: string;
}> = args => {
  const { push } = useRouter();
  void push(args.match);
  return (
    <TestProviders>
      <SidebarWrapper isVisible>{args.children}</SidebarWrapper>
    </TestProviders>
  );
};

export const About = Template.bind({});
About.args = {
  match: '/about',
  children: <SidebarAbout />,
};

export const TreeLoading = Template.bind({});
TreeLoading.args = {
  match: '/tree/_er9lvc14r',
  children: <SidebarTree isLoading />,
};

export const Tree = Template.bind({});
Tree.args = {
  match: '/tree/_er9lvc14r',
  children: <SidebarTree />,
};
export const Search = Template.bind({});
Search.args = {
  match: '/search',
  children: <SidebarSearch />,
};

export const ProfileLoading = Template.bind({});
ProfileLoading.args = {
  match: '/profile',
  children: <SidebarProfile isLoading />,
};

export const ProfileLoggedOut = Template.bind({});
ProfileLoggedOut.args = {
  match: '/profile',
  children: <SidebarProfile />,
};

export const ProfileLoggedInNoData = Template.bind({});
ProfileLoggedInNoData.args = {
  match: '/profile',
  children: (
    <SidebarProfile
      userData={{
        id: 'wipfojewpoief',
        username: 'bob',
        email: 'bob@example.com',
        isVerified: true,
        waterings: [],
        adoptedTrees: [],
      }}
    />
  ),
};

const watering = {
  amount: 10,
  id: 1,
  username: 'bob',
  timestamp: new Date().toISOString(),
  treeId: '2c303b',
};

export const ProfileLoggedInWithData = Template.bind({});
ProfileLoggedInWithData.args = {
  match: '/profile',
  children: (
    <SidebarProfile
      userData={{
        id: 'wipfojewpoief',
        username: 'bob',
        email: 'bob@example.com',
        isVerified: true,
        waterings: [watering, watering],
        adoptedTrees: [treeData],
      }}
    />
  ),
};
