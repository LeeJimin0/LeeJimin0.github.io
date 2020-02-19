import CareerPage from '../pages/Career'
import IntroducePage from '../pages/Introduce'
import TechPage from '../pages/Tech'

export const Sidebar = {
  profile:
    'https://dimg.donga.com/i/600/0/90/ugc/CDB/WEEKLY/Article/5b/10/e6/af/5b10e6af04fcd2738de6.jpg',
  name: '이지민',
  description: '웹 프론트엔드 프로그래머',
  contents: [
    {
      title: '소개',
      path: '/',
      component: IntroducePage
    },
    {
      title: '경력',
      path: '/career',
      component: CareerPage
    },
    {
      title: '기술',
      path: '/tech',
      component: TechPage
    }
  ]
}

export const Tech = {
  title: '기술',
  contents: [
    {
      title: 'Photoshop / Illustrator',
      contents: [
        {
          subTitle: '자격증',
          subContents: ['GTQ 그래픽기술자격 1급']
        },
        {
          subTitle: '서브 타이틀 2',
          subContents: [ '서브 컨텐츠 2' ]
        }
      ]
    },
    {
      title: 'HTML5 / CSS3',
      contents: [
        {
          subTitle: '서브 타이틀 1',
          subContents: [ '서브 컨텐츠 1', '서브 컨텐츠 2' ]
        }
      ]
    },
    {
      title: 'jQuery',
      contents: [
        {
          subTitle: '서브 타이틀 1',
          subContents: [ '서브 컨텐츠 1', '서브 컨텐츠 2' ]
        }
      ]
    },
    {
      title: 'JavaScript',
      contents: [
        {
          subTitle: '서브 타이틀 1',
          subContents: [ '서브 컨텐츠 1', '서브 컨텐츠 2' ]
        }
      ]
    },
    {
      title: 'Premiere / AfterEffects',
      contents: [
        {
          subTitle: '서브 타이틀 1',
          subContents: [ '서브 컨텐츠 1', '서브 컨텐츠 2' ]
        }
      ]
    }
  ]
}

export const Career = {
  title: '경력',
  contents: [
    {
      title: '회사 1',
      contents: [
        {
          subTitle: '프로젝트 1',
          subContents: [ '뭘 만듬1', '뭘 만듬2' ]
        }
      ]
    }
  ]
}

export const Interest = {
  title: '관심사',
  contents: [
    {
      title: 'React',
      contents: [
        {
          subTitle: '리액트로 만듬 1',
          subContents: [ '뭘 만듬1', '뭘 만듬1' ]
        }
      ]
    }
  ]
}
