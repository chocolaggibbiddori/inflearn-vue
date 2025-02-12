import { shallowMount } from '@vue/test-utils';
import SignupForm from './SignupForm';

describe('SignupForm', () => {
  const wrapper = shallowMount(SignupForm, {
    data() {
      return {
        username: 'a@a.com',
        password: '123456',
        nickname: 'chocola'
      };
    }
  });

  test('회원가입 폼 양식에 맞춰야만 버튼이 활성화 된다.', () => {
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeFalsy();
  });
});
