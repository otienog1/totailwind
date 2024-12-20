
import { CssMapping } from '@/types/types';

// constants.ts
const CSS_MAPPINGS: CssMapping = {
    // Colors
    'background-color: #ff0000': 'bg-red-500',
    'background-color: #00ff00': 'bg-green-500',
    'background-color: #0000ff': 'bg-blue-500',
    'background-color: #ffffff': 'bg-white',
    'background-color: #000000': 'bg-black',
    'color: #ffffff': 'text-white',
    'color: #000000': 'text-black',
    'color: #ff0000': 'text-red-500',
    'color: #00ff00': 'text-green-500',
    'color: #0000ff': 'text-blue-500',

    // Typography
    'font-size: 12px': 'text-xs',
    'font-size: 14px': 'text-sm',
    'font-size: 16px': 'text-base',
    'font-size: 18px': 'text-lg',
    'font-size: 20px': 'text-xl',
    'font-size: 24px': 'text-2xl',
    'font-size: 30px': 'text-3xl',
    'font-size: 36px': 'text-4xl',
    'font-weight: bold': 'font-bold',
    'font-weight: 400': 'font-normal',
    'font-weight: 500': 'font-medium',
    'font-weight: 600': 'font-semibold',
    'font-weight: 700': 'font-bold',
    'text-align: center': 'text-center',
    'text-align: left': 'text-left',
    'text-align: right': 'text-right',
    'text-decoration: underline': 'underline',
    'text-transform: uppercase': 'uppercase',
    'text-transform: lowercase': 'lowercase',
    'text-transform: capitalize': 'capitalize',

    // Spacing
    'padding: 0px': 'p-0',
    'padding: 4px': 'p-1',
    'padding: 8px': 'p-2',
    'padding: 12px': 'p-3',
    'padding: 16px': 'p-4',
    'padding: 24px': 'p-6',
    'padding: 32px': 'p-8',
    'padding-top: 4px': 'pt-1',
    'padding-right: 4px': 'pr-1',
    'padding-bottom: 4px': 'pb-1',
    'padding-left: 4px': 'pl-1',
    'margin: 0px': 'm-0',
    'margin: 4px': 'm-1',
    'margin: 8px': 'm-2',
    'margin: 12px': 'm-3',
    'margin: 16px': 'm-4',
    'margin: 24px': 'm-6',
    'margin: 32px': 'm-8',
    'margin-top: 4px': 'mt-1',
    'margin-right: 4px': 'mr-1',
    'margin-bottom: 4px': 'mb-1',
    'margin-left: 4px': 'ml-1',

    // Layout
    'display: flex': 'flex',
    'display: grid': 'grid',
    'display: block': 'block',
    'display: inline': 'inline',
    'display: inline-block': 'inline-block',
    'display: none': 'hidden',
    'position: relative': 'relative',
    'position: absolute': 'absolute',
    'position: fixed': 'fixed',
    'position: sticky': 'sticky',

    // Flexbox
    'justify-content: center': 'justify-center',
    'justify-content: flex-start': 'justify-start',
    'justify-content: flex-end': 'justify-end',
    'justify-content: space-between': 'justify-between',
    'justify-content: space-around': 'justify-around',
    'align-items: center': 'items-center',
    'align-items: flex-start': 'items-start',
    'align-items: flex-end': 'items-end',
    'align-items: stretch': 'items-stretch',
    'flex-direction: column': 'flex-col',
    'flex-direction: row': 'flex-row',
    'flex-wrap: wrap': 'flex-wrap',
    'flex: 1': 'flex-1',
    'flex-grow: 1': 'flex-grow',
    'flex-shrink: 0': 'flex-shrink-0',

    // Width & Height
    'width: 100%': 'w-full',
    'width: 50%': 'w-1/2',
    'width: 33%': 'w-1/3',
    'width: 25%': 'w-1/4',
    'width: auto': 'w-auto',
    'height: 100%': 'h-full',
    'height: 50%': 'h-1/2',
    'height: auto': 'h-auto',
    'min-width: 100%': 'min-w-full',
    'max-width: 100%': 'max-w-full',

    // Border
    'border: 1px solid black': 'border border-black',
    'border: 1px solid': 'border',
    'border-width: 1px': 'border',
    'border-width: 2px': 'border-2',
    'border-radius: 2px': 'rounded-sm',
    'border-radius: 4px': 'rounded',
    'border-radius: 6px': 'rounded-md',
    'border-radius: 8px': 'rounded-lg',
    'border-radius: 12px': 'rounded-xl',
    'border-radius: 16px': 'rounded-2xl',
    'border-radius: 50%': 'rounded-full',

    // Effects
    'opacity: 0': 'opacity-0',
    'opacity: 0.5': 'opacity-50',
    'opacity: 1': 'opacity-100',
    'box-shadow: 0 1px 3px rgba(0,0,0,0.1)': 'shadow-sm',
    'box-shadow: 0 4px 6px rgba(0,0,0,0.1)': 'shadow',
    'box-shadow: 0 10px 15px rgba(0,0,0,0.1)': 'shadow-lg',

    // Transitions
    'transition: all 0.3s': 'transition',
    'transition: transform 0.3s': 'transition transform',

    // Object Fit
    'object-fit: cover': 'object-cover',
    'object-fit: contain': 'object-contain',
    'object-fit: fill': 'object-fill',
    'object-fit: none': 'object-none',
} as const;

export default CSS_MAPPINGS