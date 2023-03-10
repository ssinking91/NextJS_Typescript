# π‘ NextJS_Typescript

### βοΈ Next JSλ?

- **Reactμ SSR(server side rendering)**μ μ½κ² κ΅¬νν  μ μκ² λμ μ£Όλ κ°λ¨ν **νλ μμν¬**μλλ€. (λ¦¬μ‘νΈλ λΌμ΄λΈλ¬λ¦¬)

- λ¦¬μ‘νΈλ‘ κ°λ°ν  λ SPA(single Page Application)μ μ΄μ©νλ©° CSR(Client Side Rendering)μ νκΈ° λλ¬Έμ μ’μ μ λ μμ§λ§ λ¨μ λ μλλ° κ·Έ λΆλΆμ΄ λ°λ‘ κ²μμμ§ μ΅μ ν(SEO) λΆλΆμλλ€.
  **Client Side Rendering**μ νλ©΄ **μ²«νμ΄μ§μμ λΉ htmlμ κ°μ Έμμ JSνμΌμ ν΄μνμ¬ νλ©΄μ κ΅¬μ±νκΈ° λλ¬Έμ ν¬νΈ κ²μμ κ±°μ λΈμΆ λ  μΌμ΄ μμ΅λλ€.**

- νμ§λ§ **Next.jsμμλ Pre-Rendering**μ ν΅ν΄μ **νμ΄μ§λ₯Ό λ―Έλ¦¬ λ λλ§ νλ©° μμ±λ HTMLμ κ°μ Έμ€κΈ° λλ¬Έμ μ¬μ©μμ κ²μ μμ§ ν¬λ‘€λ¬μκ² λ°λ‘ λ λλ§ λ νμ΄μ§λ₯Ό μ λ¬ν  μ μκ² λ©λλ€.**

- λ¦¬μ‘νΈμμλ SSRμ μ§μνμ§λ§ κ΅¬ννκΈ°μ κ΅μ₯ν λ³΅μ‘νκΈ° λλ¬Έμ Next.jsλ₯Ό ν΅ν΄μ μ΄ λ¬Έμ λ₯Ό ν΄κ²°ν΄μ£Όκ² λ©λλ€.

<p align="center">
<img width="600" alt="[CSR]" src="https://user-images.githubusercontent.com/89959952/217270187-d976a303-4afc-4f5a-9feb-4758b0904ad0.png">

### βοΈ Server Side Rendering

- ν΄λΌμ΄μΈνΈ λμ  μλ²μμ νμ΄μ§λ₯Ό μ€λΉνλ μλ¦¬μλλ€.

- μλ λ¦¬μ‘νΈμμλ ν΄λΌμ΄μΈνΈ μ¬μ΄λ λ λλ§νκΈ° λλ¬Έμ μλ²μ μν₯μ λ―ΈμΉμ§ μκ³ , μλ²μμ ν΄λΌμ΄μΈνΈλ‘ μλ΅ν΄μ λ³΄λΈ htmlλ κ±°μ λΉμ΄μμ΅λλ€.

  => μ΄ λ°©μμ μλ²μμ λ°μ΄ν°λ₯Ό κ°μ Έμ¬ λ μ§μ° μκ° λ°μμΌλ‘ UX μΈ‘λ©΄μμ μ’μ§ μμ μ μμ΅λλ€.

  => κ²μ μμ§μ κ²μ μ μΉν¬λ‘€λ§μ΄ λμν  λ λ΄μ©μ μ λλ‘ κ°μ Έμ μ½μ μ μκΈ°μ κ²μμμ§ μ΅μ νμ λ¬Έμ κ° λλ€.

- Next.jsμμλ μλ² μ¬μ΄λ λ λλ§μ μ΄μ©νλ―λ‘ **μ¬μ©μμ κ²μ μμ§ ν¬λ‘€λ¬μκ² λ°λ‘ λ λλ§ λ νμ΄μ§λ₯Ό μ λ¬ ν  μ μμ΄μ κ²μμμ§ μ΅μ νμ μ’μ μν₯μ μ€λλ€.**

<p align="center">
<img width="600" alt="[SSR]" src="https://user-images.githubusercontent.com/89959952/217270414-5c6da43c-41d1-4537-80c7-006f9eb95830.png">

- μ€μΉ λ°©λ²

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

### βοΈ NextJS κΈ°λ³Έ νμΌ κ΅¬μ‘°

<p align="center">
<img width="600" alt="[directory]" src="https://user-images.githubusercontent.com/89959952/217271051-a1aeb352-0af1-4888-90d7-f9e736f2aa76.png">

### βοΈ pages

- μ΄ ν΄λ μμ νμ΄μ§λ€μ μμ± ν©λλ€.

- **index.tsxκ° μ²μ "/" νμ΄μ§λ‘ λ©λλ€.**

- **\_app.tsx λ κ³΅ν΅λλ λ μ΄μμμ μμ±**ν©λλ€. λͺ¨λ  νμ΄μ§μ κ³΅ν΅μΌλ‘ λ€μ΄κ°λ κ±Έ λ£μ΄μ£Όλ €λ©΄ μ¬κΈ°μ λ£μ΄μ£Όμλ©΄ λ©λλ€. (urlμ ν΅ν΄ νΉμ  νμ΄μ§μ μ§μνκΈ° μ  ν΅κ³Όνλ μΈν°μν° νμ΄μ§μλλ€.)

- λ§μ½ aboutμ΄λΌλ νμ΄μ§λ₯Ό λ§λμλ €λ©΄ pages ν΄λ μμ about.tsxλ₯Ό μμ±ν΄μ£Όμλ©΄ λ©λλ€.

### βοΈ public

- **μ΄λ―Έμ§ κ°μ μ μ (static) μμλ€μ λ³΄κ΄**ν©λλ€.

### βοΈ styles

- λ§ κ·Έλλ μ€νμΌλ§μ μ²λ¦¬ν΄μ£Όλ ν΄λμλλ€.

- **λͺ¨λ(module) cssλ μ»΄ν¬λνΈ μ’μμ μΌλ‘ μ€νμΌλ§νκΈ° μν κ²**μ΄λ©°, νμ₯μ **μμ moduleμ λΆμ¬μ€μΌ ν©λλ€.**

### βοΈ next.config.js

- Nextjsλ **μΉν©μ κΈ°λ³Έ λ²λ€λ¬λ‘ μ¬μ©**ν©λλ€.

- κ·Έλμ **μΉν©μ κ΄ν μ€μ λ€μ μ΄ νμΌμμ ν΄μ€μμμ΅λλ€.**

<br/>

---

<br/>

### βοΈ Nextjsμμ λ°μ΄ν°λ₯Ό κ°μ Έμ€λ λ°©λ²

- μ¬λ¬ κ°μ§κ° μμ΅λλ€. κ·Έλμ μ νλ¦¬μΌμ΄μμ μ¬μ© μ©λμ λ°λΌμ λ€λ₯Έ λ°©λ²μ μ¬μ©ν΄ μ£Όλ©΄ λ©λλ€.

- λ³΄ν΅ λ¦¬μ‘νΈμμλ λ°μ΄ν°λ₯Ό κ°μ Έμ¬ λ useEffectμμμ κ°μ Έμ΅λλ€. νμ§λ§ Nextjsμμλ λ€λ₯Έ λ°©λ²μ μ¬μ©ν΄μ κ°μ Έμ€λλ° νλμ© λ΄λ³΄κ² μ΅λλ€. (useEffectλ₯Ό μ΄μ©ν΄μ κ°μ Έμ¬ μλ μμ΅λλ€.)

βοΈ **getStaticProps**

- Static GenerationμΌλ‘ λΉλ(build)ν  λ λ°μ΄ν°λ₯Ό λΆλ¬μ΅λλ€.(λ―Έλ¦¬ νλ²μ λ§λ€μ΄μ€)

βοΈ **getStaticPaths**

- Static GenerationμΌλ‘ λ°μ΄ν°μ κΈ°λ°νμ¬ pre-renderμ νΉμ ν λμ  λΌμ°ν κ΅¬ν(pages/post/[id].js)

βοΈ **getServerSideProps**

- Server Side RenderingμΌλ‘ μμ²­μ΄ μμ λ λ°μ΄ν°λ₯Ό λΆλ¬μ΅λλ€.(κ³μ)

---

βοΈ **Static Site Generation(SSG) :**

- npm run build(next build)μ²λΌ **λΉλ νμ λ HTMLμ κ° νμ΄μ§λ³λ‘ μλ²μ μμ±ν΄ λκ³  μμ²­ μμ λ μμ±λ HTMLμ λ°ν**ν©λλ€.

- κ·Έλμ **λΈλΌμ°μ κ° νμ΄μ§λ₯Ό μμ²­νμ λ μ΄λ―Έ μμ±λ HTMLλ§ λ°ννκ³  μ΄κ²μ μ¬μ¬μ©ν  μλ μμ΅λλ€. κ·Έλμ μλ΅μλκ° λ§€μ° λΉ λ₯΄κ² λ©λλ€.**

- κ·Έλμ μΈλΆ μμ²­μ μν΄μ λ³λμ΄ μλ νμ΄μ§λ€μ λ¨Όμ  λ§λ€μ΄ λκ³  κ·Έκ²μ μ¬μ¬μ©νλ©΄ μ’μ΅λλ€.

<p align="center">
<img width="600" alt="[SSG]" src="https://user-images.githubusercontent.com/89959952/217272074-0240ecfb-ac7c-4820-8b98-7fe10d24c1c7.png">
  
<p align="center">
<img width="600" alt="[SSR]" src="https://user-images.githubusercontent.com/89959952/217272115-4b4a7a0a-2ecf-4301-91db-65069575b5c6.png">
  
---

βοΈ **getStaticProps**

<p align="center">
<img width="600" alt="[getStaticProps]" src="https://user-images.githubusercontent.com/89959952/217272685-c3d39078-ff37-4708-ba96-2c218672f2a7.png">

- getStaticProps ν¨μλ₯Ό asyncλ‘ export νλ©΄, getStaticPropsμμ λ¦¬ν΄λλ propsλ₯Ό κ°μ§κ³  νμ΄μ§λ₯Ό pre-render ν©λλ€. build timeμ νμ΄μ§λ₯Ό λ λλ§ ν©λλ€.

- useEffectλ‘ λ°μ΄ν°λ₯Ό κ°μ Έμμ λ λ³΄λ€ ν¨μ¬ λΉ λ₯΄κ² κ°μ Έμ€κ² λ©λλ€.

<p align="center">
<img width="600" alt="[getStaticProps]" src="https://user-images.githubusercontent.com/89959952/217273106-4cfe5c1c-d287-4657-ba05-080f8e0f8cb4.png">

π‘ **_getStaticPropsλ₯Ό μ¬μ©ν΄μΌ ν  λ_**

- νμ΄μ§λ₯Ό λ λλ§νλ λ° νμν λ°μ΄ν°λ₯Ό μ¬μ©μμ μμ²­λ³΄λ€ λ¨Όμ  build μκ°μ κ°μ Έμ¬ μ μμ λ

- λ°μ΄ν°λ₯Ό headless CMSμμ κ°μ Έμ¬ λ

- λͺ¨λ  μ¬μ©μμκ² κ°μ λ°μ΄ν°λ₯Ό λ³΄μ¬μ€ λ

- νμ΄μ§λ λ―Έλ¦¬ λ λλ§λμ΄μΌ νκ³ (SEOμ κ²½μ°) λ§€μ° λΉ¨λΌν  λ.

(getStaticPropsλ μ±λ₯μ μν΄ CDNμμ μΊμν  μ μλ HTML λ° JSON νμΌμ μμ±ν©λλ€.)

---

βοΈ **getStaticPaths**

- λμ  λΌμ°νμ΄ νμν  λ getStaticPathsλ‘ κ²½λ‘ λ¦¬μ€νΈλ₯Ό μ μνκ³ , HTMLμ build μκ°μ λ λ λ©λλ€.

- Nextjsλ pre-renderμμ μ μ μΌλ‘ getStaticPaths μμ νΈμΆνλ κ²½λ‘λ€μ κ°μ Έμ΅λλ€.

<p align="center">
<img width="600" alt="[getStaticPaths]" src="https://user-images.githubusercontent.com/89959952/217273341-956706f7-6596-4220-87a6-e2b1b31104a0.png">

### **_paths_**

- μ΄λ ν κ²½λ‘κ° pre-render λ μ§λ₯Ό κ²°μ ν©λλ€.

- λ§μ½ pages/posts/[id].js μ΄λΌλ μ΄λ¦μ λμ  λΌμ°νμ μ¬μ©νλ νμ΄μ§κ° μλ€λ©΄ μλμ κ°μ΄ λ©λλ€.

<p align="center">
<img width="600" alt="[paths]" src="https://user-images.githubusercontent.com/89959952/217273703-dc88b2a0-38f8-4946-905f-95afe93cd4bf.png">

1. λΉλνλ λμ /posts/1κ³Ό /posts/2λ₯Ό μμ±νκ² λ©λλ€.

2. μ΄λ κ² κ²½λ‘κ° μμ±λλ©΄ getStaticPropsλ₯Ό μ΄μ©ν΄μ ν΄λΉ νμ΄μ§λ€μ HTMLμ μμ±νκ² λ©λλ€.

### **_params_**

- νμ΄μ§ μ΄λ¦μ΄ pages/posts/[postId]/[commentId] λΌλ©΄ , paramsμ postIdμ commentIdμλλ€.

- λ§μ½ νμ΄μ§ μ΄λ¦μ΄ pages/[...slug] μ κ°μ΄ λͺ¨λ  κ²½λ‘λ₯Ό μ¬μ©νλ€λ©΄, paramsλ slugκ° λ΄κΈ΄ λ°°μ΄μ΄μ΄μΌνλ€. ['postId', 'commentId']

<p align="center">
<img width="600" alt="[params]" src="https://user-images.githubusercontent.com/89959952/217273979-9ee3f73f-2a98-4e0d-a220-21d9fcd9bca8.png">

### **\***fallback**\***

- **_(λ§μ½ λ€μ΄κ° νμ΄μ§μ κ²½λ‘κ° getStaticPathsμμ λ¦¬ν΄νλ pathsμ μμ λ μ΄λ»κ² μ²λ¦¬ν  κ²μΈκ°...)_**

- **μλ₯Ό λ€μ΄ localhost:3000/posts/10000 μΌλ‘ μ§μ,Β  κ·Όλ° getStaticPathsμμ returnν κ²½λ‘μ 10000μ΄ μμ**

- false λΌλ©΄ getStaticPathsλ‘ λ¦¬ν΄λμ§ μλ κ²μ λͺ¨λ 404 νμ΄μ§κ° λΉλλ€. (λΉλμμ μ μλ νμ΄μ§λ 404 νμ΄μ§λ‘ λμ΄κ°κ² λ©λλ€.)

- true λΌλ©΄ getStaticPathsλ‘ λ¦¬ν΄λμ§ μλ κ²μ 404λ‘ λ¨μ§ μκ³ , fallback νμ΄μ§κ° λ¨κ² λ©λλ€.Β (μμ€ μ½λ μ°Έμ‘°)

- κ·Έλμ λ¨Όμ  μ¬μ©μμκ² fallback νμ΄μ§λ₯Ό λ³΄μ¬μ€λλ€.

- κ·Έλ¦¬κ³  μλ²μμ static νκ² νμ΄μ§λ₯Ό μμ±ν©λλ€.

- κ·Έ νμ μλ²μμ μμ±ν ν΄λΉ νμ΄μ§λ₯Ό μ¬μ©μμκ² λ³΄μ¬μ€λλ€.

- κ·Έ λ€μλΆν°λ ν΄λΉ νμ΄μ§λ‘ μ μνλ μ¬μ©μμκ²λ static ν νμ΄μ§λ₯Ό λ³΄μ¬μ€λλ€.

<p align="center">
<img width="600" alt="[fallback]" src="https://user-images.githubusercontent.com/89959952/217274572-87567012-6834-4729-a6d0-fc15199888ff.png">

<p align="center">
<img width="600" alt="[fallback]" src="https://user-images.githubusercontent.com/89959952/217274596-e6a4d1d0-c385-48b3-a9ec-76ff72133856.png">

---

βοΈ **getServerSideProps**

- getServerSideProps ν¨μλ₯Ό asyncλ‘ export νλ©΄, Nextλ κ° μμ²­λ§λ€ λ¦¬ν΄λλ λ°μ΄ν°λ₯Ό getServerSidePropsλ‘ pre-renderν©λλ€.

<p align="center">
<img width="600" alt="[getServerSideProps]" src="https://user-images.githubusercontent.com/89959952/217274998-88a06d7d-6b13-4d15-a7f6-8b8097bf7793.png">

<p align="center">
<img width="600" alt="[getServerSideProps]" src="https://user-images.githubusercontent.com/89959952/217275011-91642719-edb0-4f90-a9a8-dd488df582ee.png">

π‘ **_getServerSidePropsλ₯Ό μ¬μ©ν΄μΌ ν  λ_**

- μμ²­ν  λ λ°μ΄ν°λ₯Ό κ°μ ΈμμΌνλ νμ΄μ§λ₯Ό λ―Έλ¦¬ λ λν΄μΌ ν  λ μ¬μ©ν©λλ€.μλ²κ° λͺ¨λ  μμ²­μ λν κ²°κ³Όλ₯Ό κ³μ°νκ³ , μΆκ° κ΅¬μ±μμ΄ CDNμ μν΄ κ²°κ³Όλ₯Ό μΊμν  μ μκΈ° λλ¬Έμ μ²«λ²μ§Έ λ°μ΄νΈκΉμ§μ μκ°μ getStaticPropsλ³΄λ€ λλ¦½λλ€. (TTFB-Time to first byte, HTTPμμ²­ μ΄ν μ²μ λ°μ΄ν°κ° λλ¬νλ μκ°)

---

π **μ λ¦¬**

βοΈ **CSR**

- μ¬μ©μλ³ λΉκ³΅κ° νμ΄μ§μ²λΌ SEOκ° μ€μνμ§ μμ λ!

- μ²μ νλ©΄μ λ³΄μ¬ μ€ λμ λ‘λ© μκ° λΉΌκ³ λ μ¬μ© μ€ λΉ λ₯Έ μ¬μ©μκ²½ν μΈν°λ μμ΄ λ μ€μν  λ

βοΈ **SSR**

- SEOκ° μ€μν  λ!

`- μ²μ νλ©΄μ λΉ λ₯΄κ² λ³΄μ¬μ£Όλ κ²μ΄ μ€μν κ²½μ°

<br/>

---

<br/>

### βοΈ file system κΈ°λ°μ λΌμ°ν

βοΈ **νμΌ κΈ°λ° λ€λΉκ²μ΄μ κΈ°λ₯**

- λ¦¬μ‘νΈμμλ routeλ₯Ό μν΄μ react-routerλΌλ λΌμ΄λΈλ¬λ¦¬λ₯Ό μ¬μ©νμ§λ§

- Next.jsμλ νμ΄μ§ κ°λμ κΈ°λ°μΌλ‘ κ΅¬μΆλ νμΌ μμ€ν κΈ°λ° λΌμ°ν°κ° μμ΅λλ€.

- νμΌμ΄ νμ΄μ§ λλ ν λ¦¬μ μΆκ°λλ©΄ μλμΌλ‘ κ²½λ‘λ‘ μ¬μ©ν  μ μμ΅λλ€.

- νμ΄μ§ λλ ν λ¦¬ λ΄μ νμΌμ κ°μ₯ μΌλ°μ μΈ ν¨ν΄μ μ μνλ λ° μ¬μ©ν  μ μμ΅λλ€.

- νμΌ μμ± μμ

  ```typescript
  pages/index.js β /
  pages/blog/index.js β /blog
  //
  pages/blog/first-post.js β /blog/first-post
  pages/dashboard/settings/username.js β /dashboard/settings/username
  //
  pages/blog/[slug].js β /blog/:slug (/blog/hello-world)
  pages/[username]/settings.js β /:username/settings (/foo/settings)
  pages/post/[...all].js β /post/* (/post/2020/id/title)
  ```

<br/>

---

<br/>

<br/>

---

<br/>

# π‘ NextJS13_Typescript

### βοΈ NextJS 13 λ²μ 

<br/>

βοΈ **next app μ€μΉ**

```typescript
//
npx create-next-app@latest --ts ./
```

<br/>

βοΈ **λ°±μλ μλΉμ€λ₯Ό μν ν¬μΌλ² μ΄μ€ μ΄μ©νκΈ°**

- <https://pocketbase.io/docs/>

1. λ€μ΄λ‘λ

2. μ¬μ©λ²

3. Admin Login

4. Data μμ±

<br/>

---

<br/>

### βοΈ NextJS 13 File System Routing

<br/>

βοΈ **app/ Directory (beta)**

- pages λλ ν°λ¦¬ λ΄μ nesting routing κ΅¬μ‘°λ μ κ³Ό λμΌνκ² μ μ§λλ―λ‘ 12λ²μ  κ·Έλλ‘ μ¬μ©ν΄λ λ¬΄λ°©

- ν΄λ κ΅¬μ‘°λ‘ λΌμ°νμ, νμΌλ‘ UIλ₯Ό μ μν  μ μλ€. (layout.js, page.js μλμμ μμΈν μ€λͺ!

- app λλ ν λ¦¬ μμ λ€λ₯Έ νλ‘μ νΈ νμΌ(UI μ»΄ν¬λνΈ, test, stories λ±)μ κ°μ΄ μμΉμν¬ μ μλ€. (pageExtensions config μ°Έκ³ )

- κΈ°μ‘΄ pagesμ κ°μ₯ λ€λ₯Έμ μ, app λ΄μ νμΌλ€μ μλ²μμ React Server Component κ΅¬μ±μμλ‘ λ λλ§λλ€

```typescript
// Error: > the `app` dir is experimental. Please add `{experimental: { appDir: true }}` to your `next.config.js` to enable it

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
};

module.exports = nextConfig;
```

βοΈ **μμ½λ νμΌ μ΄λ¦λ€(Special Files)**

- app λλ ν°λ¦¬ λ΄μ λ€μν νμΌλ€μ΄ μΆκ° λμλ€.

- β­ **page.tsx** : A file used to define the unique UI of a route. Pages represent the leaf of the route and are needed for the path to be accessible.

- β­ **layout.tsx** : A file used to define UI that is shared across multiple pages. A layout accepts another layout or a page as its child. You can nest layouts to create nested routes.

- β­ **loading.tsx** : An optional file used to create loading UI for a specific part of an app. It automatically wraps a page or child layout in a React Suspense Boundary, showing your loading component immediately on the first load and when navigating between sibling routes.

- β­ **error.tsx** : An optional file used to isolate errors to specific parts of an app, show specific error information, and functionality to attempt to recover from the error. It automatically wraps a page or child layout in a React Error Boundary. Showing your error component whenever an error in a subtree is caught.

- β­ **template.tsx** : An optional file, similar to layouts, but on navigation, a new instance of the component is mounted and the state is not shared. You can use templates for cases where you require their behavior, such as enter/exit animations.

- β­ **head.tsx** : An optional file used to define the contents of the <head> tag for a given route.

<br/>

---

<br/>

### βοΈ Server Component

<br/>

βοΈ **Server Component**

- React 18 μ΄μ μλ Reactλ₯Ό μ¬μ©νμ¬ μ νλ¦¬μΌμ΄μμ λ λλ§νλ κΈ°λ³Έ λ°©λ²μ μ μ μΌλ‘ ν΄λΌμ΄μΈνΈμμμμ΅λλ€. => React 18 μ΄ν μλ² μ»΄ν¬λνΈ μ¬μ© κ°λ₯

- Next.jsλ HTMLμ μμ±νκ³  Reactμ μν΄ rehydrate λλλ‘ ν΄λΌμ΄μΈνΈμ μ μ‘ν¨μΌλ‘μ¨ μ νλ¦¬μΌμ΄μμ νμ΄μ§λ‘ λλκ³  μλ²μμ λ―Έλ¦¬ λ λλ§νλ λ μ¬μ΄ λ°©λ²μ μ κ³΅νμ΅λλ€. κ·Έλ¬λ μ΄λ‘ μΈν΄ μ΄κΈ° HTMLμ λνμ(interactive)μΌλ‘ λ§λ€κΈ° μν΄ ν΄λΌμ΄μΈνΈμ μΆκ° JavaScriptκ° νμνμ΅λλ€.
  => μλ²μμ λ―Έλ¦¬ λ λλ§νκΈ° μν΄ μ¬μ©νλ SSRλ λ¬Έμ κ° μμμ΅λλ€.

- μ΄μ  μλ² λ° ν΄λΌμ΄μΈνΈ Component λ₯Ό μ¬μ©νμ¬ Reactλ ν΄λΌμ΄μΈνΈμ μλ²μμ λ λλ§ν  μ μμΌλ―λ‘ κ΅¬μ± μμ μμ€μμ λ λλ§ νκ²½μ μ νν  μ μμ΅λλ€. κΈ°λ³Έμ μΌλ‘ App λλ ν°λ¦¬λ μλ² κ΅¬μ± μμλ₯Ό μ¬μ©νλ―λ‘ μλ²μμ κ΅¬μ± μμλ₯Ό μ½κ² λ λλ§νκ³  ν΄λΌμ΄μΈνΈμ μ μ‘λλ JavaScriptμ μμ μ€μΌ μ μμ΅λλ€. κ·Έλ¬λ App λ΄μμ ν΄λΌμ΄μΈνΈ κ΅¬μ± μμλ₯Ό μ¬μ©νκ³  ν΄λΌμ΄μΈνΈμμ λ λλ§ν  μ μλ μ΅μμ΄ μμ΅λλ€.
  => Server Component, Client Component κ°μ΄ μ¬μ© κ°λ₯

<br/>

- <https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html>
- <https://beta.nextjs.org/docs/rendering/server-and-client-components#server-components>

<br/>

---

<br/>

### βοΈ Data-fetching

<br/>

βοΈ **Data-fetching & error-handling**

```typescript
// app/posts/page.tsx

async function getPosts() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records",
    { cache: "no-store" }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data?.items as postItem[];
}
```

- <https://beta.nextjs.org/docs/data-fetching/fetching>

<br/>

βοΈ **Static Data Fetching**

- κΈ°λ³Έμ μΌλ‘ fetch λ μλμΌλ‘ λ°μ΄ν°λ₯Ό κ°μ Έμ€κ³  μΊμν©λλ€.

```typescript
fetch("https://..."); // cache: 'force-cache' is the default
```

- <https://beta.nextjs.org/docs/data-fetching/fetching#static-data-fetching>

<br/>

βοΈ **Refresh on every request**

- μΊμκ° μλκ² νκ³  λͺ¨λ  λ¦¬νμ€νΈλ§λ€ λ€μ κ°μ Έμ¬ μ μκ² ν΄ μ€λλ€.

```typescript
async function getPosts() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records",
    // getServerSidePropsμ μ μ¬
    { cache: "no-store" }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data?.items as postItem[];
}
```

- <https://beta.nextjs.org/docs/data-fetching/fetching#dynamic-data-fetching>

<br/>

βοΈ **Revalidating Data**

- μΊμλ λ°μ΄ν°λ₯Ό μΌμ  μκ° κ°κ²©μΌλ‘ μ¬κ²μ¦νλ €λ©΄ fetch()μμ next.revalidate μ΅μμ μ¬μ©ν  μ μμ΅λλ€. κΈ°λ³Έ λ¨μλ μ΄μλλ€.

```typescript
// app/posts/[id]/page.tsx

async function getPost(postId: String) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/posts/records/${postId}`,
    { next: { revalidate: 10 } }
  );
  if (!res.ok) throw new Error("Failed to fetch data");

  const data = await res.json();
  return data;
}
```

- <https://beta.nextjs.org/docs/data-fetching/revalidating#background-revalidation>

<br/>

βοΈ **generateStaticParams**

- generateStaticParams ν¨μλ ν΄λΉ λ μ΄μμ λλ νμ΄μ§κ° μμ±λκΈ° μ μ λΉλ μκ°μ μ€νλ©λλ€. Revalidation(ISR) μ€μλ λ€μ νΈμΆλμ§ μμ΅λλ€.

```typescript
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

- <https://beta.nextjs.org/docs/api-reference/generate-static-params>

<br/>

---

<br/>

### βοΈ λ°μ΄ν° μμ± μ»΄ν¬λνΈ μμ±

<br/>

βοΈ **λ°μ΄ν° μμ± μ»΄ν¬λνΈ μμ±**

- Client Component λ₯Ό μ¬μ©νλ €λ©΄ μ± λ΄λΆμ νμΌμ λ§λ€κ³  νμΌ μλ¨μ "use client" μ§μλ¬Έμ μΆκ°ν©λλ€(μν¬νΈνκΈ° μ μ).

```typescript
// app/posts/CreatePost.tsx

// client component
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePost = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("http://127.0.0.1:8090/api/collections/posts/records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
      }),
    });
    setTitle("");

    router.refresh();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">CreatePost</button>
    </form>
  );
};

export default CreatePost;
```

- useState λλ useEffectμ κ°μ ν΄λΌμ΄μΈνΈ νν¬λ₯Ό μ¬μ©νλ κ²½μ° κ΅¬μ± μμλ₯Ό 'ν΄λΌμ΄μΈνΈ μ¬μ©'μΌλ‘ νμνκΈ°λ§ νλ©΄ λ©λλ€. λ€λ₯Έ ν΄λΌμ΄μΈνΈ κ΅¬μ± μμμμ κ°μ Έμ€μ§ μμ λ μλμΌλ‘ μλ² κ΅¬μ± μμλ‘ λ λλ§λ  μ μλλ‘ ν΄λΌμ΄μΈνΈ νν¬μ μμ‘΄νμ§ μλ κ΅¬μ± μμλ₯Ό μ§μλ¬Έ μμ΄ κ·Έλλ‘ λλ κ²μ΄ κ°μ₯ μ’μ΅λλ€. μ΄λ₯Ό ν΅ν΄ ν΄λΌμ΄μΈνΈμΈ‘ JavaScriptλ₯Ό μ΅μνμΌλ‘ μ€μΌ μ μμ΅λλ€.

- <https://beta.nextjs.org/docs/rendering/server-and-client-components#client-components>

<br/>

---

<br/>

### βοΈ refresh()

<br/>

βοΈ **refresh()**

```typescript
// app/posts/CreatePost.tsx

// client component
"use client";

import { useRouter } from "next/navigation"; // "next/navigation" importλ‘ ν΄μ€μΌ ν¨
import { useState } from "react";

const CreatePost = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("http://127.0.0.1:8090/api/collections/posts/records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
      }),
    });
    setTitle("");

    // Refresh the current route and fetch new data from the server without
    // losing client-side browser or React state.
    router.refresh();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">CreatePost</button>
    </form>
  );
};

export default CreatePost;
```

- refresh()λ₯Ό νΈμΆνλ©΄ νμ¬ κ²½λ‘κ° μλ²μμ μλ°μ΄νΈλ ν μΌ λͺ©λ‘μ μλ‘κ³ μΉ¨νκ³  κ°μ Έμ΅λλ€. μ΄λ λΈλΌμ°μ  κΈ°λ‘μ μν₯μ λ―ΈμΉμ§ μμ§λ§ λ£¨νΈ λ μ΄μμμμ μλλ‘ λ°μ΄ν°λ₯Ό μλ‘ κ³ μΉ©λλ€. refresh()λ₯Ό μ¬μ©ν  λ React λ° λΈλΌμ°μ  μνλ₯Ό λͺ¨λ ν¬ν¨νμ¬ ν΄λΌμ΄μΈνΈ μΈ‘ μνκ° μμ€λμ§ μμ΅λλ€.
  ==> full page refreshλ₯Ό μν΄λ λ©λλ€.

- <https://beta.nextjs.org/docs/data-fetching/mutating>
