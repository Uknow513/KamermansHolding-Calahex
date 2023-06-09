import React, { useEffect } from 'react';
import HelpDiv from './Help.style';

const CookiePolicy = () => {

  return (
    <HelpDiv>
      <h2>CALAHEX: Cookie Policy</h2>
      <p>
        Our services use cookies and other technologies so that you can enjoy a more enhanced user experience. Using cookies also allows us to analyze and improve our services. Without the use of cookies and other technologies all devices such as tablets, mobile phones and computers would have to be setup individually to enable for instance personalized features. When you visit our website, browse through it, or download and use our app and using the account that your registered with us you are consenting to our use of cookies automatically. If you do not agree, there is only one thing you can do and that is to stop visiting our website or use our services. You can also disable cookies in your browser but that will make it difficult to use our website or any of the services we offer.
      </p>
      <p className="description">
        A cookie is a small amount of data generated by a website and saved by your web browser. Its purpose is to remember information about you, similar to a preference file created by a software application. While cookies serve many functions, their most common purpose is to store information for a specific site. Some sites will save both your user name and password in a cookie, while others will only save your username. Whenever you check a box that says, "Remember me on this computer," the website will generate a login cookie once you successfully log in. Each time you revisit the website, you may only need to enter your password or you might not need to log in at all.
        <br/>
        Browser cookies come in two different flavors: "session" and "persistent." Session cookies are temporary and are deleted when the browser is closed. Persistent cookies are designed to store data for an extended period of time. Each persistent cookie is created with an expiration date, which may be anywhere from a few days to several years in the future. Once the expiration date is reached, the cookie is automatically deleted. Persistent cookies are what allow websites to "remember you" for two weeks, one month, or any other amount of time.
        <p style={{color:'black'}}>At the Calahex website we use both types of cookies.</p>
        
      </p>
      <p className="description">
        Most web browsers save all cookies in a single file. This file is located in a different directory for each browser and is not meant to be opened manually. Fortunately, most browsers allow you to view your cookies in the browser preferences, typically within the "Privacy" or "Security" tab. Some browsers allow you to delete specific cookies or even prevent cookies from being created. While disallowing cookies in your browser may provide a higher level of privacy, it is not recommended since our website require cookies to function properly.
      </p>
      <h4>
        Web beacons
      </h4>
      <p className="description">
        A web beacon is a small image file — usually a transparent 1x1 pixel mage — used for tracking purposes. It may be placed in a webpage or HTML email to record when the content was loaded. While any image can be used as a web beacon, small transparent GIFs or PNGs are common since they can be placed unobtrusively on a page. They may also be used by thirdparty tracking tools that are not accessed from the main webserver. Examples include analytics code like Google Analytics and affiliate links provided by other companies. An affiliate link, for example, may include a web beacon before or after the link. The beacon allows the publisher to record the number of impressions (or number times the link is displayed), which is not possible with a plain text link.      
      </p>
      <p>
        Each browser is different, so we suggest you check the particular browser you use and to learn how to change your cookie preference. You may also find more information on how to manage your cookies from third party websites. 
        <br/> <br/>
        As to cookie management we suggest you to gather additional information on the subject by visiting the following links
      </p>
      <a href="https://support.microsoft.com/en-gb/products/windows?os=windows-10">Internet Explorer <br/></a>
      <a href="https://support.apple.com/en-gb/HT201265">Safari <br/></a>
      <a href="https://support.google.com/chrome/answer/95647?hl=en&ref_topic=3434352">Google Chrome <br/></a>
      <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer">Mozilla Firefox</a>
      <p className="description">
        For anymore questions or comments on our cookie policy please contact us at
      </p>
      <a href="mailto:support@calahex.com">support@calahex.com</a>

    </HelpDiv>
  )
}

export default CookiePolicy;