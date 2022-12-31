<template>
  <div class="type-effect" :class="{ 'typeeffect-move': !showTypeEffect }">
    <h1>
      <span>Ich liebe</span>
      <div>
        <span class="typed-text mono">{{ typeValue }}</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </div>
    </h1>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data: () => {
    return {
      showTypeEffect: true,
      lastScrollPosition: 0,
      typeValue: "",
      typeStatus: false,
      typeArray: [
        "programmiere!",
        "Software Entwicklung!",
        "Web Entwicklung!",
        "JavaScript",
        "Linux!",
        "Datenbanken Managment",
        "UI/UX Design",
        "innovative Projekte",
      ],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 100,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 100) {
        return;
      }
      this.showTypeEffect = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },

  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss" scoped>
.type-effect {
  position: absolute;
  font-size: 0.6em;
  bottom: 0;
  left: 0px;
  height: 80px;
  text-align: center;
  width: 100%;
  transition: 400ms;
}
.type-effect.typeeffect-move {
  font-size: 0.5em;
  transform: translate3d(0, -100%, 0);
}
h1 {
  span.typed-text {
    color: var(--sec-color);
  }

  span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 2px;
    background-color: var(--body-color);
    animation: cursorBlink 1s infinite;
  }

  span.cursor.typing {
    animation: none;
  }
}

@keyframes cursorBlink {
  40% {
    background-color: var(--body-color);
  }
  50% {
    background-color: transparent;
  }
  100% {
    background-color: var(--body-color);
  }
}
</style>
