import Vue from 'vue';
import LoginForm from './LoginForm';
import { shallowMount } from '@vue/test-utils';

describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅 되면 화면에 그려져야 한다.', () => {
    const instance = new Vue(LoginForm).$mount();
    expect(instance.username).toBe('');
  });

  test('컴포넌트가 마운딩되면 username이 존재하고 초기값으로 설정되어 있어야 한다.', () => {
    const wrapper = shallowMount(LoginForm);
    expect(wrapper.vm.username).toBe('');
  });

  test('ID는 이메일 형식이어야 한다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test@abc.com'
        };
      }
    });
    const username = wrapper.find('#username');
    console.log(username.element.value);
    console.log(wrapper.vm.isUsernameValid);
  });
});
