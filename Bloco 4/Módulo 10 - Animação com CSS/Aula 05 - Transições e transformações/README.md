# Step by step - Transições e transformação

## Pseudo-classes

### tl;dl

- [x] `:active`
- [x] `:checked`
- [x] `:disabled`
- [x] `:enabled`
- [x] `:empty`
- [x] `:focus`
- [x] `:hover`
- [x] `:in-range (en-US)`
- [x] `:out-of-range`
- [x] `:invalid`
- [x] `:link`
- [x] `:optional`
- [x] `:required`
- [x] `:valid`
- [x] `:visited`
- [x] `:not()`

<br>

<details>

<summary>Dica</summary>

#### Documentação Pseudo-classes

Link: https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes

</details>


<br>

## Transformações

### Funções de transformação

#### `matrix(x,y)`, `matrix3d(x,y,z)`

```css
transform: matrix(1, 2, 3, 4, 5, 6);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
```

#### `perspective()`

```css
transform: perspective(17px);
```

#### `rotate()`, `rotate3d()`, `rotateX()`, `rotateY()`, `rotateZ`

```css
transform: rotate(0.5turn);
transform: rotate3d(1, 2, 3, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
```

#### `translate(), translate3d(), translateX(), translateY(), translateZ()`

```css
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
```

#### `scale(), scale3d, scaleX(), scaleY(), scaleZ()`

```css
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
```

#### `skew()`, `skewX()`, `skewY()`

```css
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
```

### Multiplas funções de transformação

```css
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);
```

### Valores pré-definidos

```css
transform: inherit;
transform: initial;
transform: revert;
transform: revert-layer;
transform: unset;
```

<br>

<details>

<summary>Dica</summary>

#### Documentação Transformações

Link: https://developer.mozilla.org/en-US/docs/Web/CSS/transform

Cross-Browser: 
- Transform 2d: https://caniuse.com/transforms2d
- Transform 3d: https://caniuse.com/transforms3d

Webkit: 
- [`-webkit-transform-2d`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/-webkit-transform-2d)
- [`-webkit-transform-3d`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/-webkit-transform-3d)

</details>


<br>

## Transições

### td;dl

- [x] transition-delay
- [x] transition-duration
- [x] transition-property
- [x] transition-timing-function

### transition

#### propriedade(s), duração

```css
transition: margin-right 4s;
```

#### propriedade(s), duração, tempo de atraso

```css
transition: margin-right 4s ease-in-out;
```

#### propriedade(s), duração, tempo de atraso, easing

```css
transition: margin-right 4s ease-in-out;
```

#### Transição em duas ou mais propriedades

```css
transition: margin-right 4s, color 1s;
```

#### Transição em todas as propriedades

```css
transition: all 0.5s ease-out;
```

### Valores pré-definidos

```css
transition: inherit;
transition: initial;
transition: revert;
transition: revert-layer;
transition: unset;
```
