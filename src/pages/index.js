import React from "react"
import HomeAbout from "../components/homePage/HomeAbout";
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from "../components/homePage/HomeContent";
import HomeFeature from "../components/homePage/HomeFeature";
import Layout from "../components/layout"
import { useGlobalStateContext } from '../context/globalContext';
import { useGlobalDispatchContext } from '../context/globalContext';

const IndexPage = props => {
  const { cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext()
  const onCursor = cursorType => {
    cursorType = ( cursorStyles.includes( cursorType ) && cursorType ) || false;
    dispatch({
      type: 'CURSOR_TYPE',
      cursorType: cursorType
    })
  }

  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeature onCursor={onCursor} />
      <HomeAbout onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
