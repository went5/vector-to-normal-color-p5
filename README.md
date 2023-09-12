# RGB Vector to Color in p5.js with React
![image](https://github.com/went5/vector-to-normal-color-p5/assets/10868288/788dbc7d-6d17-41cc-beea-10a753611952)

[Demo](https://codesandbox.io/s/vector-to-normal-color-p5-xibmzu?file=/src/App.tsx)

## Description

このプロジェクトは、p5.jsとReactを用いて、RGB値を0~1.0の範囲から0~255の範囲に変換するサンプルコードです。
Levaパッケージを使用して、ユーザーはX, Y, Zの値をインタラクティブに調整できます。

## Features

- 3Dベクトル（X, Y, Z）からRGB（0~255）の値に変換
- Levaを用いたインタラクティブなコントロール
- Reactとp5.jsを組み合わせたプロジェクト

## How it Works

### VectorToColor Function

この関数は、与えられたx, y, z（範囲: -1.0~1.0）を使用して、それをRGB（0~255）の値に変換します。

```typescript
const VectorToColor = (x: number, y: number, z: number) => {
  return {
    r: Math.ceil((x / 2 + 0.5) * 255),
    g: Math.ceil((y / 2 + 0.5) * 255),
    b: Math.ceil((z / 2 + 0.5) * 255)
  };
};
```

## Setup and Run

1. プロジェクトをクローンまたはダウンロードします。
2. 依存関係をインストールします： `npm install`
3. プロジェクトを実行します： `npm start`

## Dependencies

- p5.js
- react-p5
- leva
