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
          username: 'test'
        };
      }
    });
    const warningText = wrapper.find('.warning');
    expect(warningText.exists()).toBeTruthy();
  });

  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'a',
          password: '123'
        };
      }
    });

    const button = wrapper.find('.btn');
    expect(button.element.classList.contains('disabled')).toBeTruthy();
  });
});
