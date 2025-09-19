import { Image } from '@repo/ui/image';

export function ImageExample2() {
  return (
    <Image
      source={{
        uri: 'https://gluestack.github.io/public-blog-video-assets/mountains.png',
      }}
      alt="Logo"
      size="none"
      className="aspect-[320/208] w-full max-w-[320px]"
    />
  );
}
