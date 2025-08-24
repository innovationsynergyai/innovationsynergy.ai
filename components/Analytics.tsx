'use client'

import Script from 'next/script'
import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

interface AnalyticsProps {
  gtmId?: string
  gaId?: string
  facebookPixelId?: string
  linkedinPartnerId?: string
  hotjarId?: string
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
    fbq: (...args: any[]) => void
    _linkedin_partner_id: string
    lintrk: (...args: any[]) => void
    hj: (...args: any[]) => void
    _hjSettings: {
      hjid: number
      hjsv: number
    }
  }
}

const AnalyticsCore: React.FC<AnalyticsProps> = ({
  gtmId = process.env.NEXT_PUBLIC_GTM_ID,
  gaId = process.env.NEXT_PUBLIC_GA_ID,
  facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
  linkedinPartnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID,
  hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID
}) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Track page views on route changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Google Analytics page view
      if (window.gtag && gaId) {
        window.gtag('config', gaId, {
          page_path: pathname + (searchParams.toString() ? `?${searchParams.toString()}` : ''),
          page_title: document.title,
        })
      }

      // Facebook Pixel page view
      if (window.fbq && facebookPixelId) {
        window.fbq('track', 'PageView')
      }

      // LinkedIn Insight Tag page view
      if (window.lintrk && linkedinPartnerId) {
        window.lintrk('track', { conversion_id: linkedinPartnerId })
      }
    }
  }, [pathname, searchParams, gaId, facebookPixelId, linkedinPartnerId])

  return (
    <>
      {/* Google Tag Manager */}
      {gtmId && (
        <>
          <Script id="gtm-script" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* Google Analytics 4 */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-script" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true,
                custom_map: {
                  'custom_parameter_1': 'innovation_synergy_ai'
                }
              });
            `}
          </Script>
        </>
      )}

      {/* Facebook Pixel */}
      {facebookPixelId && (
        <>
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${facebookPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* LinkedIn Insight Tag */}
      {linkedinPartnerId && (
        <>
          <Script id="linkedin-insight" strategy="afterInteractive">
            {`
              window._linkedin_partner_id = "${linkedinPartnerId}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);})(window.lintrk);
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt=""
              src={`https://px.ads.linkedin.com/collect/?pid=${linkedinPartnerId}&fmt=gif`}
            />
          </noscript>
        </>
      )}

      {/* Hotjar */}
      {hotjarId && (
        <Script id="hotjar-script" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${hotjarId},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      )}
    </>
  )
}

const Analytics: React.FC<AnalyticsProps> = (props) => {
  return (
    <Suspense fallback={null}>
      <AnalyticsCore {...props} />
    </Suspense>
  )
}

export default Analytics