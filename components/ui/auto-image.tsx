import Image from 'next/image'
import { cn } from '@/lib/utils'

interface AutoImageProps extends Omit<React.ComponentPropsWithoutRef<typeof Image>, 'alt'> {
  containerClassName?: string;
  alt: string; // Make alt required
}

export function AutoImage({ containerClassName, className, alt, ...props }: AutoImageProps) {
  return (
    <div className={cn('relative', containerClassName)}>
      <Image
        alt={alt}
        {...props}
        className={cn('w-full h-auto', className)}
      />
    </div>
  )
}
