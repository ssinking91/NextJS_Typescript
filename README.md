# 💡 NextJS_Typescript

### ✔️ Next JS란?

- **React의 SSR(server side rendering)**을 쉽게 구현할 수 있게 도와 주는 간단한 **프레임워크**입니다. (리액트는 라이브러리)

- 리액트로 개발할 때 SPA(single Page Application)을 이용하며 CSR(Client Side Rendering)을 하기 때문에 좋은 점도 있지만 단점도 있는데 그 부분이 바로 검색엔진 최적화(SEO) 부분입니다.
  **Client Side Rendering**을 하면 **첫페이지에서 빈 html을 가져와서 JS파일을 해석하여 화면을 구성하기 때문에 포털 검색에 거의 노출 될 일이 없습니다.**

- 하지만 **Next.js에서는 Pre-Rendering**을 통해서 **페이지를 미리 렌더링 하며 완성된 HTML을 가져오기 때문에 사용자와 검색 엔진 크롤러에게 바로 렌더링 된 페이지를 전달할 수 있게 됩니다.**

- 리액트에서도 SSR을 지원하지만 구현하기에 굉장히 복잡하기 때문에 Next.js를 통해서 이 문제를 해결해주게 됩니다.

<p align="center">
<img width="600" alt="[CSR]" src="https://user-images.githubusercontent.com/89959952/217270187-d976a303-4afc-4f5a-9feb-4758b0904ad0.png">

### ✔️ Server Side Rendering

- 클라이언트 대신 서버에서 페이지를 준비하는 원리입니다.

- 원래 리액트에서는 클라이언트 사이드 렌더링하기 때문에 서버에 영향을 미치지 않고, 서버에서 클라이언트로 응답해서 보낸 html도 거의 비어있습니다.

  => 이 방식은 서버에서 데이터를 가져올 때 지연 시간 발생으로 UX 측면에서 좋지 않을 수 있습니다.

  => 검색 엔진에 검색 시 웹크롤링이 동작할 때 내용을 제대로 가져와 읽을 수 없기에 검색엔진 최적화에 문제가 된다.

- Next.js에서는 서버 사이드 렌더링을 이용하므로 **사용자와 검색 엔진 크롤러에게 바로 렌더링 된 페이지를 전달 할 수 있어서 검색엔진 최적화에 좋은 영향을 줍니다.**

<p align="center">
<img width="600" alt="[SSR]" src="https://user-images.githubusercontent.com/89959952/217270414-5c6da43c-41d1-4537-80c7-006f9eb95830.png">

- 설치 방법

```jsx
npx create-next-app@latest
// or
yarn create next-app
```

```jsx
npx create-next-app@latest --typescript
// or
yarn create next-app --typescript
```

<br/>

---

<br/>

### ✔️ NextJS 기본 파일 구조

<p align="center">
<img width="600" alt="[directory]" src="https://user-images.githubusercontent.com/89959952/217271051-a1aeb352-0af1-4888-90d7-f9e736f2aa76.png"> 


 
 
### ⚙️ pages

- 이 폴더 안에 페이지들을 생성 합니다.

- **index.tsx가 처음 "/" 페이지로 됩니다.**

- **\_app.tsx 는 공통되는 레이아웃을 작성**합니다. 모든 페이지에 공통으로 들어가는 걸 넣어주려면 여기에 넣어주시면 됩니다. (url을 통해 특정 페이지에 진입하기 전 통과하는 인터셉터 페이지입니다.)

- 만약 about이라는 페이지를 만드시려면 pages 폴더 안에 about.tsx를 생성해주시면 됩니다.

### ⚙️ public

- **이미지 같은 정적(static) 에셋들을 보관**합니다.

### ⚙️ styles

- 말 그래도 스타일링을 처리해주는 폴더입니다.

- **모듈(module) css는 컴포넌트 종속적으로 스타일링하기 위한 것**이며, 확장자 **앞에 module을 붙여줘야 합니다.**

### ⚙️ next.config.js

- Nextjs는 **웹팩을 기본 번들러로 사용**합니다.

- 그래서 **웹팩에 관한 설정들을 이 파일에서 해줄수있습니다.**

<br/>

---

<br/>

### ✔️ Nextjs에서 데이터를 가져오는 방법

- 여러 가지가 있습니다. 그래서 애플리케이션의 사용 용도에 따라서 다른 방법을 사용해 주면 됩니다.

- 보통 리액트에서는 데이터를 가져올 때 useEffect안에서 가져옵니다. 하지만 Nextjs에서는 다른 방법을 사용해서 가져오는데 하나씩 봐보겠습니다. (useEffect를 이용해서 가져올 수도 있습니다.)

⚙️ **getStaticProps**

- Static Generation으로 빌드(build)할 때 데이터를 불러옵니다.(미리 한번에 만들어줌)

⚙️ **getStaticPaths**

- Static Generation으로 데이터에 기반하여 pre-render시 특정한 동적 라우팅 구현(pages/post/[id].js)

⚙️ **getServerSideProps**

- Server Side Rendering으로 요청이 있을 때 데이터를 불러옵니다.(계속)

---

⚙️ **Static Site Generation(SSG) :**

- npm run build(next build)처럼 **빌드 타임 때 HTML을 각 페이지별로 서버에 생성해 놓고 요청 왔을 때 생성된 HTML을 반환**합니다.

- 그래서 **브라우저가 페이지를 요청했을 때 이미 생성된 HTML만 반환하고 이것은 재사용할 수도 있습니다. 그래서 응답속도가 매우 빠르게 됩니다.**

- 그래서 외부 요청에 의해서 변동이 없는 페이지들은 먼저 만들어 놓고 그것을 재사용하면 좋습니다.

<p align="center">
<img width="600" alt="[SSG]" src="https://user-images.githubusercontent.com/89959952/217272074-0240ecfb-ac7c-4820-8b98-7fe10d24c1c7.png"> 
  
<p align="center">
<img width="600" alt="[SSR]" src="https://user-images.githubusercontent.com/89959952/217272115-4b4a7a0a-2ecf-4301-91db-65069575b5c6.png"> 
  
---

⚙️ **getStaticProps**

<p align="center">
<img width="600" alt="[getStaticProps]" src="https://user-images.githubusercontent.com/89959952/217272685-c3d39078-ff37-4708-ba96-2c218672f2a7.png"> 

- getStaticProps 함수를 async로 export 하면, getStaticProps에서 리턴되는 props를 가지고 페이지를 pre-render 합니다. build time에 페이지를 렌더링 합니다.

- useEffect로 데이터를 가져왔을 때 보다 훨씬 빠르게 가져오게 됩니다.

<p align="center">
<img width="600" alt="[getStaticProps]" src="https://user-images.githubusercontent.com/89959952/217273106-4cfe5c1c-d287-4657-ba05-080f8e0f8cb4.png"> 

💡 **_getStaticProps를 사용해야 할 때_**

- 페이지를 렌더링하는 데 필요한 데이터를 사용자의 요청보다 먼저 build 시간에 가져올 수 있을 때

- 데이터를 headless CMS에서 가져올 때

- 모든 사용자에게 같은 데이터를 보여줄 때

- 페이지는 미리 렌더링되어야 하고(SEO의 경우) 매우 빨라할 때.

(getStaticProps는 성능을 위해 CDN에서 캐시할 수 있는 HTML 및 JSON 파일을 생성합니다.)

---

⚙️ **getStaticPaths**

- 동적 라우팅이 필요할 때 getStaticPaths로 경로 리스트를 정의하고, HTML에 build 시간에 렌더 됩니다.

- Nextjs는 pre-render에서 정적으로 getStaticPaths 에서 호출하는 경로들을 가져옵니다.

<p align="center">
<img width="600" alt="[getStaticPaths]" src="https://user-images.githubusercontent.com/89959952/217273341-956706f7-6596-4220-87a6-e2b1b31104a0.png"> 
 
### **_paths_**

- 어떠한 경로가 pre-render 될지를 결정합니다.

- 만약 pages/posts/[id].js 이라는 이름의 동적 라우팅을 사용하는 페이지가 있다면 아래와 같이 됩니다.

<p align="center">
<img width="600" alt="[paths]" src="https://user-images.githubusercontent.com/89959952/217273703-dc88b2a0-38f8-4946-905f-95afe93cd4bf.png"> 

1. 빌드하는 동안 /posts/1과 /posts/2를 생성하게 됩니다.

2. 이렇게 경로가 생성되면 getStaticProps를 이용해서 해당 페이지들의 HTML을 생성하게 됩니다.

### **_params_**

- 페이지 이름이 pages/posts/[postId]/[commentId] 라면 , params은 postId와 commentId입니다.

- 만약 페이지 이름이 pages/[...slug] 와 같이 모든 경로를 사용한다면, params는 slug가 담긴 배열이어야한다. ['postId', 'commentId']

<p align="center">
<img width="600" alt="[params]" src="https://user-images.githubusercontent.com/89959952/217273979-9ee3f73f-2a98-4e0d-a220-21d9fcd9bca8.png"> 

### **\***fallback**\***

- **_(만약 들어간 페이지의 경로가 getStaticPaths에서 리턴하는 paths에 없을 때 어떻게 처리할 것인가...)_**

- **예를 들어 localhost:3000/posts/10000 으로 진입,  근데 getStaticPaths에서 return한 경로에 10000이 없음**

- false 라면 getStaticPaths로 리턴되지 않는 것은 모두 404 페이지가 뜹니다. (빌드시점에 없는 페이지는 404 페이지로 넘어가게 됩니다.)

- true 라면 getStaticPaths로 리턴되지 않는 것은 404로 뜨지 않고, fallback 페이지가 뜨게 됩니다. (소스 코드 참조)

- 그래서 먼저 사용자에게 fallback 페이지를 보여줍니다.

- 그리고 서버에서 static 하게 페이지를 생성합니다.

- 그 후에 서버에서 생성한 해당 페이지를 사용자에게 보여줍니다.

- 그 다음부터는 해당 페이지로 접속하는 사용자에게는 static 한 페이지를 보여줍니다.

<p align="center">
<img width="600" alt="[fallback]" src="https://user-images.githubusercontent.com/89959952/217274572-87567012-6834-4729-a6d0-fc15199888ff.png"> 
 
<p align="center">
<img width="600" alt="[fallback]" src="https://user-images.githubusercontent.com/89959952/217274596-e6a4d1d0-c385-48b3-a9ec-76ff72133856.png"> 
 
---

⚙️ **getServerSideProps**

- getServerSideProps 함수를 async로 export 하면, Next는 각 요청마다 리턴되는 데이터를 getServerSideProps로 pre-render합니다.
 
<p align="center">
<img width="600" alt="[getServerSideProps]" src="https://user-images.githubusercontent.com/89959952/217274998-88a06d7d-6b13-4d15-a7f6-8b8097bf7793.png">

<p align="center">
<img width="600" alt="[getServerSideProps]" src="https://user-images.githubusercontent.com/89959952/217275011-91642719-edb0-4f90-a9a8-dd488df582ee.png">

💡 **_getServerSideProps를 사용해야 할 때_**

- 요청할 때 데이터를 가져와야하는 페이지를 미리 렌더해야 할 때 사용합니다.서버가 모든 요청에 대한 결과를 계산하고, 추가 구성없이 CDN에 의해 결과를 캐시할 수 없기 때문에 첫번째 바이트까지의 시간은 getStaticProps보다 느립니다. (TTFB-Time to first byte, HTTP요청 이후 처음 데이터가 도달하는 시간)

---

👀 **정리**

⚙️ **CSR**

- 사용자별 비공개 페이지처럼 SEO가 중요하지 않을 때!

- 처음 화면을 보여 줄 때의 로딩 시간 빼고는 사용 중 빠른 사용자경험 인터렉션이 더 중요할 때

⚙️ **SSR**

- SEO가 중요할 때!

`- 처음 화면을 빠르게 보여주는 것이 중요한 경우
