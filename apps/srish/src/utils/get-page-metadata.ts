import type {TPage} from '@repo/common/types';
import type { Metadata } from 'next';
import {loadQuery} from '@/sanity/lib/store';
import {getPageQuery} from '@/sanity/lib/queries';

export const getPageMetadata = async (path: string): Promise<Metadata> => {
  const query = getPageQuery(path);
  const {data: page} = await loadQuery<TPage>(query);

  return {
    title: `${page.title} | Srish, A UX Designer`,
  }
}
