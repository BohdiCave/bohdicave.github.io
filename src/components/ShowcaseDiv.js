import React from 'react';
import Showcase from './Showcase.js';
import LinkTop from './LinkTop.js';

export default function ShowcaseDiv() {
  return (
    <>
    <Showcase name="showcase0" />
    <Showcase name="showcase1" />
    <Showcase name="showcase2" />
    <LinkTop type="div" padbottom="bottom-10" />
    </>
  );
}