'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const verifyPassword = (
  redirectPath: string,
  prevInput: string,
  formData: FormData,
) => {
  if (formData.get('password') === process.env.POST_PASSWORD) {
    const cookieStore = cookies();
    cookieStore.set(process.env.PASSWORD_COOKIE_NAME!, 'true');
    redirect(redirectPath);
  } else {
    return 'Incorrect password';
  }
};
