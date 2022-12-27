# Step by step - Animação quadro à quadro

## Animação quadro à quadro

### tl;dl

- [x] `@keyframes`
- [x] `animation`
    - [x] `animation-name`
    - [x] `animation-duration`
    - [x] `animation-delay`
    - [x] `animation-iteration-count`
    - [x] `animation-direction`
    - [x] `animation-timing-function`
    - [x] `animation-fill-mode`
- [x] Preliminares
    - [x] `linear`
    - [x] `ease`
    - [x] `ease-out`
    - [x] `ease-in-out`


### Linha do tempo

`@keyframes`

```css
@keyframes goTo {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
```

```css
@keyframes goTo {
    0% { 
        transform: translateX(0); 
    }
    50% { 
        transform: translateX(75%); 
    }
    100% { 
        transform: translateX(100%); 
    }
}

/* ou */

@keyframes goTo {
    from { 
        transform: translateX(0); 
    }
    50% { 
        transform: translateX(75%); 
    }
    to { 
        transform: translateX(100%); 
    }
}
```

<br>

<details>

<summary>Dica</summary>

#### Documentação @keyframes

Link: https://developer.mozilla.org/pt-BR/docs/Web/CSS/@keyframes

</details>

<br>

### Adicionando e configurando animações

```css
animation-duration: 3s;
animation-timing-function: ease-in;
animation-delay: 1s;
animation-interations-count: 2;
animation-direction: reverse;
animation-fill-mode: both;
animation-play-state: paused;
animation-name: slidein;

animation: 3s ease-in 1s 2 reverse both paused slidein;
```

<br>

<details>

<summary>Dica</summary>

#### Documentação animation

Link: https://developer.mozilla.org/pt-BR/docs/Web/CSS/animation

</details>

<br>

### Adicionando `easing` na animação

`ease`

![ease](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/cubic-bezier-ease.png)

`ease-in`

![ease-in](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/cubic-bezier-ease-in.png)

`ease-in-out`

![ease-in-out](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/cubic-bezier-ease-in-out.png)

`ease-out`

![ease-out](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/cubic-bezer-ease-out.png)

`linear`

![linear](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/cubic-bezier-linear.png)

`step-start`

![step-start](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/steps-1-start.png)

`step-end`

![step-end](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/steps-1-end.png)

<br>

<details>

<summary>Dica</summary>

#### Documentação Pseudo-classes

Link: https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes

</details>
