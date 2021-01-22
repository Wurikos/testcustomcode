import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<script place={"endOfBody"} rawKey={"6009da73af03b56eef1f96d0"}>
				{"function ready() {\n    require(['jquery'], function($) {\nSmoothScroll({\n    animationTime    : 800,\n    stepSize         : 75,\n    accelerationDelta : 30,  \n    accelerationMax   : 2,   \n    keyboardSupport   : true,  \n    arrowScroll       : 50,\n    pulseAlgorithm   : true,\n    pulseScale       : 4,\n    pulseNormalize   : 1,\n    touchpadSupport   : true,\n})\n    });\n} \ndocument.addEventListener(\"DOMContentLoaded\", ready);\n"}
			</script>
			<script src={"https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js"} place={"endOfHead"} rawKey={"6009de00d53b0e744cc0abc0"} />
		</RawHtml>
	</Theme>;
});