import React from 'react';

export function Footer() {
  return (
    <footer className="bg-purple-900 text-gray-200 py-8">
      <div className="container mx-auto text-center">
        <p className="mb-2">國立成功大學工業與資訊管理學系資訊管理研究所</p>
        <p className="mb-2">
          701 台南市大學路1號 | (06) 2757575#53100 (XXX) | orstw2024@gmail.com
        </p>
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} National Cheng Kung University ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}