<template>
  <form @submit.prevent="submitHandler" class="card auth__card">
    <div class="card__content">
      <p class="card__title">Авторизуйтесь</p>

      <div class="form-item">
        <label for="userName" class="form-label">Имя</label>
        <input
          type="text"
          name="userName"
          id="userName"
          class="form-input"
          :class="{ invalid: errors.userName }"
          v-model.trim="userName"
        >
        <small v-if="errors.userName" class="error-input">{{ errors.userName }}</small>
      </div>

      <div class="form-item">
        <label for="email" class="form-label">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          class="form-input"
          :class="{ invalid: errors.email }"
          v-model.trim="email"
        >
        <small v-if="errors.email" class="error-input">{{ errors.email }}</small>

      </div>
      <div class="form-item">
        <label for="password" class="form-label">Пароль</label>
        <input
          type="password"
          name="password"
          id="password"
          class="form-input"
          :class="{ invalid: errors.email }"
          v-model.trim="password"
        >
        <small v-if="errors.password" class="error-label">{{ error }}</small>
      </div>

      <div class="form-item">
        <label for="myAvatar" class="form-label">Загрузите аватар</label>
        <input
          type="file"
          name="myAvatar"
          id="myAvatar"
          ref="myAvatar"
          class="form-input_file"
          @change="handleFileUpload()"
        >
      </div>

      <button
        type="submit"
        :class="['btn', 'card__btn']"
      >
        Войти
      </button>

    </div>
  </form>
</template>

<script>

export default {
  name: 'Auth',

  data: () => ({
    userName: '',
    isUserNameTouched: false,

    email: '',
    isEmailTouched: false,

    password: '',
    isPasswordTouched: false,

    file: '',

    errors: {
      userName: null,
      email: null,
      password: null,
    }

  }),
  computed: {
    // isEmailValid() {
    //   return emailRegExp.test(this.email);
    // },

    // isEmailError() {
    //   return !this.isEmailValid && this.isEmailTouched;
    // },
  },

  methods: {
    formIsValid() {
      let isValid = true

      this.errors = {
        userName: null,
        email: null,
        password: null,
      }

      //userName
      if (this.userName.length === 0) {
        this.errors.userName = 'Поле не может быть пустым'
        isValid = false
      }
      if (this.userName.length < 3 || this.userName.length > 15) {
        this.errors.userName = 'Не менее 3-х и не более 15-ти'
        isValid = false
      }

      //email
      const emailRegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

      if (this.email.length === 0) {
        this.errors.email = 'Поле не может быть пустым'
        isValid = false
      } else {
        this.errors.email = null
      }
      if (!emailRegExp.test(this.email)) {
        this.errors.email = 'Введите корректный email'
        isValid = false
      } else {
        this.errors.email = null
      }

      //password
      const passwordRegExp = /(?=.*[a-z]){8,}/i

      if (this.password.length === 0) {
        this.errors.password = 'Поле не может быть пустым'
        isValid = false
      } else {
        this.errors.password = null
      }
      // if (!passwordRegExp.test(this.password)) {
      //   this.errors.password = 'Введите корректный email'
      //   isValid = false
      // } else {
      //   this.errors.password = null
      // }

      return isValid
    },

    handleFileUpload() {
      // this.file = this.$refs.file
      console.log(this.$refs.file)
      console.log(this.file)
    },


    submitHandler() {
      if (this.formIsValid()) {
        console.group('Form Data')
        console.log('Name:', this.userName)
        console.log('Email:', this.email)
        console.log('password:', this.password)
        console.log('file:', this.file)

        console.groupEnd()
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  min-width: 320px;

  &__title {
    font-size: 2.8rem;
    margin-bottom: 3rem;
    text-align: center;
  }

  &__btn {
    text-transform: uppercase;
  }

  &__link {
    color: $colorText;
    text-align: center;
    margin-top: 1rem;
    display: block;
    font-size: 1.6rem;

    &:hover {
      text-decoration-line: underline;
    }
  }

  &__img {
    max-width: 75px;
    margin: auto;

    img {
      width: 100%;
    }
  }
}

.form-input_file {
  display: block;
}

//.form-item input:active,
//.form-item input:focus {
//  transition: border 0.2s;
//  border: 2px solid #42b983;
//}
</style>
