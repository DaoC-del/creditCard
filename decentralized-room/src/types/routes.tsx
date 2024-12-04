import React from 'react';
import Home from '../pages/Home';
import Room from '../pages/Room';

export interface RouteConfig {
  path: string;
  element: JSX.Element; // 明确表示这是一个 JSX 元素，而不是类型
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Home />, // 确保 Home 是一个组件实例
  },
  {
    path: '/room',
    element: <Room />,
  },
];
