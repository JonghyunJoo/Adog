<div align="center">
<h2>ADOG🎮</h2>
<h3>게임 할인 정보 제공 및 가격 비교 서비스</h3>
국내외 많은 사이트와 플랫폼에서 제공되는 할인에 대한 정보를 한번에 보고 비교할 수 있도록 제공하는 서비스.<br>
더조은아카데미에서 1인으로 진행한 개인 프로젝트
</div>

## 목차
  - [개요](#개요) 
  - [게임 설명](#게임-설명)
  - [게임 플레이 방식](#게임-플레이-방식)

## 개요
- 프로젝트 이름: ADOG
- 프로젝트 지속기간: 2023.05 ~ 2023.06
- 개발 스택: Next.js, React.js, TypeScript, MongoDB, AWS E3

## 게임 설명
|<img width="800" alt="Adog-main" src="https://github.com/JonghyunJoo/Adog/assets/128676068/43d4a0cd-8a55-490e-8f85-4a722edf1731">|![image](https://user-images.githubusercontent.com/66003567/216818272-8749569b-b217-4572-9738-32b0058459f4.png)|
|:---:|:---:|
|메인 페이지|사용자 정보 화면|

긴장감, 압박감과 같이 일상에서 느낄 수 있는 부정적인 감정에서 벗어나 편안한 분위기 속에서 즐길 수 있는 힐링 게임을 만들고자 소소빌리지(SosoVillage)를 개발하게 되었습니다.<br>
- 모험과 힐링을 동시에 즐겨라! ⚔️<br>
소소빌리지에선 모험과 힐링을 동시에 즐길 수 있다는 특징이 있습니다. 기본 홈(Home)맵에서는 작물도 기르고 요리도 할 수 있으며, 숲(Forest)에서는 나무, 두더지 등의 몬스터와 싸우고 낚시를 통해 물고기를 얻을 수도 있습니다. 이 과정을 통해 캐릭터는 생산물을 얻고 성장할 수 있습니다. 
- 다양한 미니게임을 즐겨라! 🎯<br>
각 스테이지별로 다양한 종류의 미니게임을 통해 하나의 게임에서 여러 재미를 향유할 수 있습니다. 이 게임의 목적은 플레이어의 지속되는 생활을 위한 물품을 얻는 것에 있습니다. 
- 자유를 즐겨라! 🏄🏻<br>
캐릭터는 높은 자율성을 가집니다. 특정 일에 대해 강제성을 부여하지 않고 오직 캐릭터의 활동만으로 게임이 진행됩니다. 예를 들어 낚시에 흥미를 느낀다면, 낚시에 빠져들어 최강의 어부가 될 수 있습니다. 어떠한 제약도 소소빌리지에서는 존재하지 않습니다.
- 초보자도 누구나! 👶<br>
높은 자율성이 존재하는 만큼 처음 플레이하게 되었을 때 낯섦을 느낄 수 있습니다. 소소빌리지는 모든 게임 화면에서 설명을 기재하였으며 언제든지 궁금한 경우 열람할 수 있도록 하였습니다. 더불어 모든 상황에 대한 경고를 해주어, 예기치 못한 일을 방지할 수 있습니다.

## 게임 플레이 방식
- 캐릭터 이동 방법

|이동방향|상(위)|좌(왼쪽)|하(아래)|우(오른쪽)|
|---|---|---|---|---|
|키보드| W | A | S | D |
|방향키|⬆️|⬅️|⬇️|➡️|

- 맵의 이동 가능 장소

|Home|Forest|Store|Room|
|---|---|---|---|
|![image](https://user-images.githubusercontent.com/66003567/216816017-bfd18669-9f70-45c2-8561-bae648690602.png)|![image](https://user-images.githubusercontent.com/66003567/216815971-d8ed6ea8-1f92-45f8-9611-1cbe2b5e8db0.png)|![image](https://user-images.githubusercontent.com/66003567/216815991-88e0f4d6-3e5d-4c19-9eb9-97047b40c0d0.png)|![image](https://user-images.githubusercontent.com/66003567/216816002-4eca6510-4436-44f5-b949-347e75129ada.png)|
|옥수수 농사 가능|슈팅, 두더지 잡기, 낚시 미니게임 입장 가능|물품 판매 및 구매 가능|게임 저장 가능|

- 미니게임

|베이킹|슈팅|두더지 잡기|낚시|
|---|---|---|---|
|![image](https://user-images.githubusercontent.com/66003567/216816081-cf4a29c6-72f3-4b75-b01d-3dd6e3faabc5.png)|![image](https://user-images.githubusercontent.com/66003567/216816088-cd83d20a-e023-4af2-b406-98197af5ff35.png)|![image](https://user-images.githubusercontent.com/66003567/216816106-5a97f26e-565b-43a6-bfab-d22e36745f80.png)|![image](https://user-images.githubusercontent.com/66003567/216816119-fb22c507-f6c4-49a3-b4f0-28ecaae94f6c.png)|
|오븐 타이머 조절 성공시 빵 획득|나무 몬스터 제거시 코인 획득|일정 수 이상 두더지 잡기 성공시 코인 획득|찌를 올바른 위치에 멈추기 3회 성공시 선택한 난이도의 물고기 획득|

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
