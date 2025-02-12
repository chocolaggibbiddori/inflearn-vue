import Vue from 'vue';
import LoginForm from './LoginForm';

describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅 되면 화면에 그려져야 한다.', () => {
    const instance = new Vue(LoginForm).$mount();
    console.log(instance);
    expect(instance.username).toBe('');
  });

  test('컴포넌트가 마운딩되면 username이 존재하고 초기값으로 설정되어 있어야 한다.', () => {
    const instance = new Vue(LoginForm).$mount();
    expect(instance.username).toBe('');
  });
});
