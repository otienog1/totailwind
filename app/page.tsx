'use client'

import React, { useState, ChangeEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import CSS_MAPPINGS from '@/instance/constants';


const CssToTailwindConverter: React.FC = () => {
    const [html, setHtml] = useState<string>('');
    const [css, setCss] = useState<string>('');
    const [output, setOutput] = useState<string>('');
    const [error, setError] = useState<string>('');

    const processPixelValue = (value: string, property: string): string | null => {
        const pxValuePattern = /(\d+)px/;
        const match = value.match(pxValuePattern);

        if (match) {
            const px = parseInt(match[1]);
            if (px <= 0) return `${property}-0`;
            if (px <= 4) return `${property}-1`;
            if (px <= 8) return `${property}-2`;
            if (px <= 12) return `${property}-3`;
            if (px <= 16) return `${property}-4`;
            if (px <= 20) return `${property}-5`;
            if (px <= 24) return `${property}-6`;
            if (px <= 32) return `${property}-8`;
            if (px <= 40) return `${property}-10`;
            if (px <= 48) return `${property}-12`;
            return `${property}-16`;
        }
        return null;
    };

    const cssToTailwind = (cssString: string): string => {
        const rules = cssString
            .split('}')
            .map(rule => rule.trim())
            .filter(Boolean);

        const tailwindClasses = rules.flatMap(rule => {
            const [selector, declarations] = rule.split('{');
            const ruleDeclarations = declarations?.trim().split(';');

            if (!ruleDeclarations) return [];

            return ruleDeclarations.map(declaration => {
                const [property, value] = declaration.split(':').map(part => part.trim());

                if (property.startsWith('margin')) {
                    return processPixelValue(value, 'm') || CSS_MAPPINGS[`${property}: ${value}`] || '';
                }
                if (property.startsWith('padding')) {
                    return processPixelValue(value, 'p') || CSS_MAPPINGS[`${property}: ${value}`] || '';
                }

                return CSS_MAPPINGS[`${property}: ${value}`] || '';
            }).filter(Boolean);
        }).filter(Boolean);

        return tailwindClasses.join(' ');
    };

    const processHTML = (htmlString: string, cssString: string): string => {
        const tailwindClasses = cssToTailwind(cssString);

        // Handle elements with existing classes
        return htmlString
            .replace(
                /class="([^"]*)"/g,
                (match: string, existingClasses: string) => {
                    const combinedClasses = `${existingClasses} ${tailwindClasses}`.trim();
                    return `class="${combinedClasses}"`;
                }
            )
            .replace(
                /<([a-zA-Z0-9]+)(?![^>]*class=)/g,
                `<$1 class="${tailwindClasses}"`
            );
    };

    const handleHTMLChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setHtml(e.target.value);
    };

    const handleCSSChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setCss(e.target.value);
    };

    const convertToTailwind = (): void => {
        try {
            const processedHtml = processHTML(html, css);
            setOutput(processedHtml);
            setError('');
        } catch (err) {
            setError('Error processing the input. Please check your HTML and CSS syntax.');
            console.error(err);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <Card className="mb-4 uppercase">
                <CardHeader>
                    <CardTitle>CSS to Tailwind Converter</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2 uppercase">HTML Markup</label>
                            <textarea
                                className="w-full h-40 p-2 border font-mono text-sm"
                                value={html}
                                onChange={handleHTMLChange}
                                placeholder='<div class="">Your HTML here</div>'
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 uppercase">CSS Styles</label>
                            <textarea
                                className="w-full h-40 p-2 border font-mono text-sm"
                                value={css}
                                onChange={handleCSSChange}
                                placeholder="div { background-color: #ff0000; padding: 16px; }"
                            />
                        </div>
                    </div>

                    <button
                        onClick={convertToTailwind}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition uppercase text-xs"
                    >
                        Convert to Tailwind
                    </button>

                    {error && (
                        <div className="mt-4 p-2 bg-red-100 text-red-700">
                            {error}
                        </div>
                    )}

                    <div className="mt-4">
                        <label className="block text-sm font-medium mb-2 uppercase">
                            Output HTML with Tailwind Classes
                        </label>
                        <textarea
                            className="w-full h-40 p-2 border font-mono text-sm"
                            value={output}
                            readOnly
                            placeholder="Converted HTML will appear here..."
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CssToTailwindConverter;