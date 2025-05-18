'use client';

import { GoogleMapsEmbed } from '@next/third-parties/google';

type GoogleMapProps = {
    address: string;
    apiKey: string;
    zoom?: string;
};

export const GoogleMap = ({ address, apiKey, zoom = '15' }: GoogleMapProps) => {
    const query = encodeURIComponent(address);

    return (
        <div className="w-full h-[400px] overflow-hidden">
            <GoogleMapsEmbed
                apiKey={apiKey}
                height={400}
                width="100%"
                mode="place"
                q={query}
                zoom={zoom}
            />
        </div>
    );
};
