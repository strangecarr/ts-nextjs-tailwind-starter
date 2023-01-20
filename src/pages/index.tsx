import * as React from 'react';
import { RWebShare } from 'react-web-share';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  async function handleSubmit() {
    alert('succesfully shared');
  }

  return (
    <RWebShare
      sites={['facebook', 'twitter', 'whatsapp', 'mail']}
      data={{
        text: 'SwipeyGo likes    ',
        url: `https://nextjs.org/`,
        title: 'Share your likes',
      }}
      onClick={() => handleSubmit()}
    >
      <button
        type='button'
        className='mx-4 mt-4 rounded-full border-2 border-pink-500 py-4
      font-sans text-xl text-black shadow-md backdrop-blur-md'
      >
        Share
      </button>
    </RWebShare>
  );
}
