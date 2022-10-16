import React, { useContext, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { makeStyles, Tabs } from '@material-ui/core'
import { ApiContext } from '../context/ApiContext'
import categoryData from '../data/localData'
import a11yProps from '../components/Tabs/a11yProps'
import ActiveVideo from '../components/ActiveVideo/ActiveVideo'
import CardsList from '../components/CardsList/CardsList'
import TabPanel from '../components/Tabs/TabPanel'
import StyledTab from '../components/Tabs/TabVertical'
import DropDownMenu from '../components/DropDownMenu/DropDownMenu'
import Loading from '../components/Loading/Loading'

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1800,
    height: 'calc(100vh - 100px)',
    display: 'flex',
    margin: '15px auto 40px',
    padding: 20,
    '@media (max-width: 1100px)': {
      height: 'auto',
      padding: 15,
      flexDirection: 'column',
    },
  },
  videoContainer: {
    flex: 1,
    minHeight: 500,
    '@media (max-width: 1100px)': {
      width: '100%',
    },
  },
  listContainer: {
    position: 'relative',
    maxWidth: '100%',
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 20,
    marginLeft: 40,
    padding: '0 20px 30px',
    overflow: 'hidden',
    boxShadow: '0px 0px 6px 2px rgba(0,0,0,0.45)',
    '@media (max-width: 1100px)': {
      overflow: 'auto',
      width: '100%',
      height: 'auto',
      borderRadius: 0,
      margin: 0,
      padding: 0,
      boxShadow: 'none',
    },
  },
  list: {
    marginTop: 100,
    maxHeight: 500,
    height: 500,
    overflowY: 'scroll',
    paddingRight: 10,
    '@media (max-width: 1100px)': {
      overflowY: 'auto',
      height: 'auto',
      paddingRight: 0,
    },
    '&::-webkit-scrollbar': {
      width: 8,
      backgroundColor: 'rgb(61, 71, 76)',
      borderRadius: 10,
      cursor: 'pointer',
      '@media (max-width: 1100px)': {
        display: 'none',
      },
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.colors.colorST,
      borderRadius: 10,
      '@media (max-width: 1100px)': {
        display: 'none',
      },
    },
  },
  tabs: {
    borderTop: theme.border,
    fontSize: theme.typography.pxToRem(16),
    alignItems: 'flex-start',
    minWidth: '100%',
    padding: 10,
    background: theme.colors.background,
  },
}))

const VideoScreen = (props) => {
  const classes = useStyles()
  const { videos, video, trailer, videoCategory, loading, getSelectMovie } =
    useContext(ApiContext)
  const [playing, setPlaying] = useState(true)
  // const MOVIE_URL = `https://www.youtube.com/watch?v=${trailer.key}`
  const [categoryName, setCategoryName] = useState('')
  const [categoryIndex, setCategoryIndex] = useState(0)

  const getCategoryIndex = () => {
    let activeCategory = categoryData.find(
      (cat) => cat.genre_ids === videoCategory.id
    )
    return activeCategory ? activeCategory.index : 0
  }

  const getCategoryName = () => {
    let activeCategory = categoryData.find((cat) => cat.index === categoryIndex)
    return activeCategory ? activeCategory.category : ''
  }

  useEffect(() => {
    getSelectMovie(props.match.params.id)
    setPlaying(false)
  }, [props.match.params.id])

  useEffect(() => {
    if (video) {
      // setCategoryName(videoCategory.name)
      setCategoryIndex(getCategoryIndex())
    }
  }, [videoCategory])

  useEffect(() => {
    setCategoryName(getCategoryName())
  }, [categoryIndex])

  const handleChangeTab = (event, newValue) => {
    setCategoryIndex(newValue)
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={classes.container}>
          <div className={classes.videoContainer}>
            <ActiveVideo video={video}>
              <ReactPlayer
                className='react-player'
                url={`https://www.youtube.com/watch?v=${trailer}`}
                width='100%'
                height='600px'
                controls={true}
                playing={playing}
                onEnded={() => setPlaying(false)}
              />
            </ActiveVideo>
          </div>
          <div className={classes.listContainer}>
            <DropDownMenu selectCategory={categoryName}>
              <Tabs
                orientation='vertical'
                variant='scrollable'
                value={categoryIndex}
                onChange={handleChangeTab}
                aria-label='Vertical tabs'
                className={classes.tabs}
                TabIndicatorProps={{
                  style: {
                    display: 'none',
                  },
                }}
              >
                {categoryData.map((item) => (
                  <StyledTab
                    key={item.index}
                    {...a11yProps(item.index)}
                    label={item.category}
                  />
                ))}
              </Tabs>
            </DropDownMenu>
            <div className={classes.list}>
              {categoryData.map((item) => (
                <TabPanel
                  key={item.index}
                  index={item.index}
                  value={categoryIndex}
                >
                  <CardsList
                    data={videos}
                    active={0}
                    category={item.genre_ids}
                    // setCategory={0}
                  />
                </TabPanel>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default VideoScreen
