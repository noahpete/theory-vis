import React, { Component } from "react";
import "./styles.css";

class Channel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { opacity } = this.props;

    return (
      <div
        className="game-object channel"
        style={{
          opacity: opacity,
          top: 80,
          left: 220,
        }}
      >
        <p
          style={{
            paddingLeft: "1.5em",
            color: "gainsboro",
          }}
        >
          Public Space
        </p>
        <svg
          width="161"
          height="223"
          viewBox="0 0 161 223"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_203_23" fill="white">
            <path d="M0 1.65637L1.66563 0H4.50197L0 4.47696V1.65637Z" />
            <path d="M0 20.477V17.6564L17.755 0H20.5914L0 20.477Z" />
            <path d="M0 36.477V33.6564L33.8444 0H36.6807L0 36.477Z" />
            <path d="M0 50.477V47.6564L47.9226 0H50.759L0 50.477Z" />
            <path d="M0 66.477V63.6564L64.012 0H66.8483L0 66.477Z" />
            <path d="M0 82.477V79.6564L80.1014 0H82.9377L0 82.477Z" />
            <path d="M0 98.477V95.6564L96.1908 0H99.0271L0 98.477Z" />
            <path d="M0 114.477V111.656L112.28 0H115.117L0 114.477Z" />
            <path d="M0 130.477V127.656L128.37 0H131.206L0 130.477Z" />
            <path d="M0 146.477V143.656L144.459 0H147.295L0 146.477Z" />
            <path d="M0 160.477V157.656L158.537 0H161V0.371409L0 160.477Z" />
            <path d="M0 176.477V173.656L161 13.5508V16.3714L0 176.477Z" />
            <path d="M0 192.477V189.656L161 29.5508V32.3714L0 192.477Z" />
            <path d="M0 208.477V205.656L161 45.5508V48.3714L0 208.477Z" />
            <path d="M1.48521 223H0V221.656L161 61.5508V64.3714L1.48521 223Z" />
            <path d="M17.5746 223H14.7383L161 77.5508V80.3714L17.5746 223Z" />
            <path d="M31.6528 223H28.8165L161 91.5508V94.3714L31.6528 223Z" />
            <path d="M47.7422 223H44.9058L161 107.551V110.371L47.7422 223Z" />
            <path d="M63.8316 223H60.9952L161 123.551V126.371L63.8316 223Z" />
            <path d="M79.921 223H77.0846L161 139.551V142.371L79.921 223Z" />
            <path d="M96.0104 223H93.174L161 155.551V158.371L96.0104 223Z" />
            <path d="M112.1 223H109.263L161 171.551V174.371L112.1 223Z" />
            <path d="M128.189 223H125.353L161 187.551V190.371L128.189 223Z" />
            <path d="M142.267 223H139.431L161 201.551V204.371L142.267 223Z" />
            <path d="M158.357 223H155.52L161 217.551V220.371L158.357 223Z" />
            <path d="M0 0H161V223H0V0Z" />
          </mask>
          <path
            d="M0 1.65637L-1.41027 0.238226L-2 0.824681V1.65637H0ZM1.66563 0V-2H0.840461L0.255358 -1.41815L1.66563 0ZM4.50197 0L5.91224 1.41815L9.34948 -2L4.50197 -2V0ZM0 4.47696H-2V9.28643L1.41027 5.89511L0 4.47696ZM0 20.477H-2V25.2864L1.41027 21.8951L0 20.477ZM0 17.6564L-1.41027 16.2382L-2 16.8247V17.6564H0ZM17.755 0V-2H16.9298L16.3447 -1.41815L17.755 0ZM20.5914 0L22.0016 1.41815L25.4389 -2H20.5914V0ZM0 36.477H-2V41.2864L1.41027 37.8951L0 36.477ZM0 33.6564L-1.41027 32.2382L-2 32.8247V33.6564H0ZM33.8444 0V-2H33.0192L32.4341 -1.41815L33.8444 0ZM36.6807 0L38.091 1.41815L41.5283 -2H36.6807V0ZM0 50.477H-2V55.2864L1.41027 51.8951L0 50.477ZM0 47.6564L-1.41027 46.2382L-2 46.8247V47.6564H0ZM47.9226 0V-2H47.0974L46.5123 -1.41815L47.9226 0ZM50.759 0L52.1692 1.41815L55.6065 -2H50.759V0ZM0 66.477H-2V71.2864L1.41027 67.8951L0 66.477ZM0 63.6564L-1.41027 62.2382L-2 62.8247V63.6564H0ZM64.012 0V-2H63.1868L62.6017 -1.41815L64.012 0ZM66.8483 0L68.2586 1.41815L71.6959 -2L66.8483 -2V0ZM0 82.477H-2V87.2864L1.41027 83.8951L0 82.477ZM0 79.6564L-1.41027 78.2382L-2 78.8247V79.6564H0ZM80.1014 0V-2H79.2762L78.6911 -1.41815L80.1014 0ZM82.9377 0L84.348 1.41815L87.7852 -2L82.9377 -2V0ZM0 98.477H-2V103.286L1.41027 99.8951L0 98.477ZM0 95.6564L-1.41027 94.2382L-2 94.8247V95.6564H0ZM96.1908 0V-2H95.3656L94.7805 -1.41815L96.1908 0ZM99.0271 0L100.437 1.41815L103.875 -2H99.0271V0ZM0 114.477H-2V119.286L1.41027 115.895L0 114.477ZM0 111.656L-1.41027 110.238L-2 110.825V111.656H0ZM112.28 0V-2H111.455L110.87 -1.41815L112.28 0ZM115.117 0L116.527 1.41815L119.964 -2H115.117V0ZM0 130.477H-2V135.286L1.41027 131.895L0 130.477ZM0 127.656L-1.41027 126.238L-2 126.825V127.656H0ZM128.37 0V-2H127.544L126.959 -1.41815L128.37 0ZM131.206 0L132.616 1.41815L136.053 -2H131.206V0ZM0 146.477H-2V151.286L1.41027 147.895L0 146.477ZM0 143.656L-1.41027 142.238L-2 142.825V143.656H0ZM144.459 0V-2H143.634L143.049 -1.41815L144.459 0ZM147.295 0L148.706 1.41815L152.143 -2H147.295V0ZM0 160.477H-2V165.286L1.41027 161.895L0 160.477ZM0 157.656L-1.41027 156.238L-2 156.825V157.656H0ZM158.537 0V-2H157.712L157.127 -1.41815L158.537 0ZM161 0H163V-2H161V0ZM161 0.371409L162.41 1.78956L163 1.2031V0.371409H161ZM0 176.477H-2V181.286L1.41027 177.895L0 176.477ZM0 173.656L-1.41027 172.238L-2 172.825V173.656H0ZM161 13.5508H163V8.74134L159.59 12.1327L161 13.5508ZM161 16.3714L162.41 17.7896L163 17.2031V16.3714H161ZM0 192.477H-2V197.286L1.41027 193.895L0 192.477ZM0 189.656L-1.41027 188.238L-2 188.825V189.656H0ZM161 29.5508H163V24.7413L159.59 28.1327L161 29.5508ZM161 32.3714L162.41 33.7896L163 33.2031V32.3714H161ZM0 208.477H-2V213.286L1.41027 209.895L0 208.477ZM0 205.656L-1.41027 204.238L-2 204.825V205.656H0ZM161 45.5508H163V40.7413L159.59 44.1327L161 45.5508ZM161 48.3714L162.41 49.7896L163 49.2031V48.3714H161ZM1.48521 223V225H2.31038L2.89548 224.418L1.48521 223ZM0 223H-2V225H0V223ZM0 221.656L-1.41027 220.238L-2 220.825V221.656H0ZM161 61.5508H163V56.7413L159.59 60.1327L161 61.5508ZM161 64.3714L162.41 65.7896L163 65.2031V64.3714H161ZM17.5746 223V225H18.3998L18.9849 224.418L17.5746 223ZM14.7383 223L13.328 221.582L9.89074 225H14.7383V223ZM161 77.5508H163V72.7413L159.59 76.1327L161 77.5508ZM161 80.3714L162.41 81.7896L163 81.2031V80.3714H161ZM31.6528 223V225H32.478L33.0631 224.418L31.6528 223ZM28.8165 223L27.4062 221.582L23.969 225H28.8165V223ZM161 91.5508H163V86.7413L159.59 90.1327L161 91.5508ZM161 94.3714L162.41 95.7896L163 95.2031V94.3714H161ZM47.7422 223V225H48.5674L49.1525 224.418L47.7422 223ZM44.9058 223L43.4956 221.582L40.0583 225H44.9058V223ZM161 107.551H163V102.741L159.59 106.133L161 107.551ZM161 110.371L162.41 111.79L163 111.203V110.371H161ZM63.8316 223V225H64.6567L65.2418 224.418L63.8316 223ZM60.9952 223L59.585 221.582L56.1477 225H60.9952V223ZM161 123.551H163V118.741L159.59 122.133L161 123.551ZM161 126.371L162.41 127.79L163 127.203V126.371H161ZM79.921 223V225H80.7461L81.3312 224.418L79.921 223ZM77.0846 223L75.6743 221.582L72.2371 225H77.0846V223ZM161 139.551H163V134.741L159.59 138.133L161 139.551ZM161 142.371L162.41 143.79L163 143.203V142.371H161ZM96.0104 223V225H96.8355L97.4206 224.418L96.0104 223ZM93.174 223L91.7637 221.582L88.3265 225H93.174V223ZM161 155.551H163V150.741L159.59 154.133L161 155.551ZM161 158.371L162.41 159.79L163 159.203V158.371H161ZM112.1 223V225H112.925L113.51 224.418L112.1 223ZM109.263 223L107.853 221.582L104.416 225H109.263V223ZM161 171.551H163V166.741L159.59 170.133L161 171.551ZM161 174.371L162.41 175.79L163 175.203V174.371H161ZM128.189 223V225H129.014L129.599 224.418L128.189 223ZM125.353 223L123.943 221.582L120.505 225H125.353V223ZM161 187.551H163V182.741L159.59 186.133L161 187.551ZM161 190.371L162.41 191.79L163 191.203V190.371H161ZM142.267 223V225H143.092L143.678 224.418L142.267 223ZM139.431 223L138.021 221.582L134.583 225H139.431V223ZM161 201.551H163V196.741L159.59 200.133L161 201.551ZM161 204.371L162.41 205.79L163 205.203V204.371H161ZM158.357 223V225H159.182L159.767 224.418L158.357 223ZM155.52 223L154.11 221.582L150.673 225H155.52V223ZM161 217.551H163V212.741L159.59 216.133L161 217.551ZM161 220.371L162.41 221.79L163 221.203V220.371H161ZM0 0V-2H-2V0H0ZM161 223V225H163V223H161ZM1.41027 3.07452L3.0759 1.41815L0.255358 -1.41815L-1.41027 0.238226L1.41027 3.07452ZM1.66563 2H4.50197V-2H1.66563V2ZM3.0917 -1.41815L-1.41027 3.05881L1.41027 5.89511L5.91224 1.41815L3.0917 -1.41815ZM2 4.47696V1.65637H-2V4.47696H2ZM2 20.477V17.6564H-2V20.477H2ZM1.41027 19.0745L19.1653 1.41815L16.3447 -1.41815L-1.41027 16.2382L1.41027 19.0745ZM17.755 2H20.5914V-2H17.755V2ZM19.1811 -1.41815L-1.41027 19.0588L1.41027 21.8951L22.0016 1.41815L19.1811 -1.41815ZM2 36.477V33.6564H-2V36.477H2ZM1.41027 35.0745L35.2547 1.41815L32.4341 -1.41815L-1.41027 32.2382L1.41027 35.0745ZM33.8444 2H36.6807V-2H33.8444V2ZM35.2705 -1.41815L-1.41027 35.0588L1.41027 37.8951L38.091 1.41815L35.2705 -1.41815ZM2 50.477V47.6564H-2V50.477H2ZM1.41027 49.0745L49.3329 1.41815L46.5123 -1.41815L-1.41027 46.2382L1.41027 49.0745ZM47.9226 2H50.759V-2H47.9226V2ZM49.3487 -1.41815L-1.41027 49.0588L1.41027 51.8951L52.1692 1.41815L49.3487 -1.41815ZM2 66.477V63.6564H-2V66.477H2ZM1.41027 65.0745L65.4223 1.41815L62.6017 -1.41815L-1.41027 62.2382L1.41027 65.0745ZM64.012 2H66.8483V-2H64.012V2ZM65.4381 -1.41815L-1.41027 65.0588L1.41027 67.8951L68.2586 1.41815L65.4381 -1.41815ZM2 82.477V79.6564H-2V82.477H2ZM1.41027 81.0745L81.5116 1.41815L78.6911 -1.41815L-1.41027 78.2382L1.41027 81.0745ZM80.1014 2H82.9377V-2H80.1014V2ZM81.5275 -1.41815L-1.41027 81.0588L1.41027 83.8951L84.348 1.41815L81.5275 -1.41815ZM2 98.477V95.6564H-2V98.477H2ZM1.41027 97.0745L97.601 1.41815L94.7805 -1.41815L-1.41027 94.2382L1.41027 97.0745ZM96.1908 2H99.0271V-2H96.1908V2ZM97.6168 -1.41815L-1.41027 97.0588L1.41027 99.8951L100.437 1.41815L97.6168 -1.41815ZM2 114.477V111.656H-2V114.477H2ZM1.41027 113.075L113.69 1.41815L110.87 -1.41815L-1.41027 110.238L1.41027 113.075ZM112.28 2H115.117V-2H112.28V2ZM113.706 -1.41815L-1.41027 113.059L1.41027 115.895L116.527 1.41815L113.706 -1.41815ZM2 130.477V127.656H-2V130.477H2ZM1.41027 129.075L129.78 1.41815L126.959 -1.41815L-1.41027 126.238L1.41027 129.075ZM128.37 2H131.206V-2H128.37V2ZM129.796 -1.41815L-1.41027 129.059L1.41027 131.895L132.616 1.41815L129.796 -1.41815ZM2 146.477V143.656H-2V146.477H2ZM1.41027 145.075L145.869 1.41815L143.049 -1.41815L-1.41027 142.238L1.41027 145.075ZM144.459 2H147.295V-2H144.459V2ZM145.885 -1.41815L-1.41027 145.059L1.41027 147.895L148.706 1.41815L145.885 -1.41815ZM2 160.477V157.656H-2V160.477H2ZM1.41027 159.075L159.947 1.41815L157.127 -1.41815L-1.41027 156.238L1.41027 159.075ZM158.537 2H161V-2H158.537V2ZM159 0V0.371409H163V0H159ZM159.59 -1.04674L-1.41027 159.059L1.41027 161.895L162.41 1.78956L159.59 -1.04674ZM2 176.477V173.656H-2V176.477H2ZM1.41027 175.075L162.41 14.969L159.59 12.1327L-1.41027 172.238L1.41027 175.075ZM159 13.5508V16.3714H163V13.5508H159ZM159.59 14.9533L-1.41027 175.059L1.41027 177.895L162.41 17.7896L159.59 14.9533ZM2 192.477V189.656H-2V192.477H2ZM1.41027 191.075L162.41 30.969L159.59 28.1327L-1.41027 188.238L1.41027 191.075ZM159 29.5508V32.3714H163V29.5508H159ZM159.59 30.9533L-1.41027 191.059L1.41027 193.895L162.41 33.7896L159.59 30.9533ZM2 208.477V205.656H-2V208.477H2ZM1.41027 207.075L162.41 46.969L159.59 44.1327L-1.41027 204.238L1.41027 207.075ZM159 45.5508V48.3714H163V45.5508H159ZM159.59 46.9533L-1.41027 207.059L1.41027 209.895L162.41 49.7896L159.59 46.9533ZM1.48521 221H0V225H1.48521V221ZM2 223V221.656H-2V223H2ZM1.41027 223.075L162.41 62.969L159.59 60.1327L-1.41027 220.238L1.41027 223.075ZM159 61.5508V64.3714H163V61.5508H159ZM159.59 62.9533L0.0749424 221.582L2.89548 224.418L162.41 65.7896L159.59 62.9533ZM17.5746 221H14.7383V225H17.5746V221ZM16.1485 224.418L162.41 78.969L159.59 76.1327L13.328 221.582L16.1485 224.418ZM159 77.5508V80.3714H163V77.5508H159ZM159.59 78.9533L16.1643 221.582L18.9849 224.418L162.41 81.7896L159.59 78.9533ZM31.6528 221H28.8165V225H31.6528V221ZM30.2267 224.418L162.41 92.969L159.59 90.1327L27.4062 221.582L30.2267 224.418ZM159 91.5508V94.3714H163V91.5508H159ZM159.59 92.9533L30.2425 221.582L33.0631 224.418L162.41 95.7896L159.59 92.9533ZM47.7422 221H44.9058V225H47.7422V221ZM46.3161 224.418L162.41 108.969L159.59 106.133L43.4956 221.582L46.3161 224.418ZM159 107.551V110.371H163V107.551H159ZM159.59 108.953L46.3319 221.582L49.1525 224.418L162.41 111.79L159.59 108.953ZM63.8316 221H60.9952V225H63.8316V221ZM62.4055 224.418L162.41 124.969L159.59 122.133L59.585 221.582L62.4055 224.418ZM159 123.551V126.371H163V123.551H159ZM159.59 124.953L62.4213 221.582L65.2418 224.418L162.41 127.79L159.59 124.953ZM79.921 221H77.0846V225H79.921V221ZM78.4949 224.418L162.41 140.969L159.59 138.133L75.6743 221.582L78.4949 224.418ZM159 139.551V142.371H163V139.551H159ZM159.59 140.953L78.5107 221.582L81.3312 224.418L162.41 143.79L159.59 140.953ZM96.0104 221H93.174V225H96.0104V221ZM94.5843 224.418L162.41 156.969L159.59 154.133L91.7637 221.582L94.5843 224.418ZM159 155.551V158.371H163V155.551H159ZM159.59 156.953L94.6001 221.582L97.4206 224.418L162.41 159.79L159.59 156.953ZM112.1 221H109.263V225H112.1V221ZM110.674 224.418L162.41 172.969L159.59 170.133L107.853 221.582L110.674 224.418ZM159 171.551V174.371H163V171.551H159ZM159.59 172.953L110.689 221.582L113.51 224.418L162.41 175.79L159.59 172.953ZM128.189 221H125.353V225H128.189V221ZM126.763 224.418L162.41 188.969L159.59 186.133L123.943 221.582L126.763 224.418ZM159 187.551V190.371H163V187.551H159ZM159.59 188.953L126.779 221.582L129.599 224.418L162.41 191.79L159.59 188.953ZM142.267 221H139.431V225H142.267V221ZM140.841 224.418L162.41 202.969L159.59 200.133L138.021 221.582L140.841 224.418ZM159 201.551V204.371H163V201.551H159ZM159.59 202.953L140.857 221.582L143.678 224.418L162.41 205.79L159.59 202.953ZM158.357 221H155.52V225H158.357V221ZM156.931 224.418L162.41 218.969L159.59 216.133L154.11 221.582L156.931 224.418ZM159 217.551V220.371H163V217.551H159ZM159.59 218.953L156.946 221.582L159.767 224.418L162.41 221.79L159.59 218.953ZM0 2H161V-2H0V2ZM159 0V223H163V0H159ZM161 221H0V225H161V221ZM2 223V0H-2V223H2Z"
            fill="#DCDCDC"
            mask="url(#path-1-inside-1_203_23)"
          />
        </svg>
      </div>
    );
  }
}

export default Channel;