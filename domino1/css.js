// var style = StyleSheet.create({
//     body: {
//       "position": "relative",
//       "margin": "0",
//       "padding": "0",
//       "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif",
//       "WebkitFontSmoothing": "antialiased",
//       "MozOsxFontSmoothing": "grayscale",
//       "background": "url('./bk.png') no-repeat fixed center",
//       "backgroundSize": "cover",
//       "transition": "0.3s"
//     },
//     html: {
//       "width": "100%",
//       "height": "100%",
//       "overflowX": "hidden"
//     },
//     root: {
//       "width": "100%",
//       "height": "100%",
//       "overflowX": "hidden"
//     },
//     intro: {
//       "background": "url(intro.png) center no-repeat",
//       "backgroundSize": "cover",
//       "height": "100%"
//     },
//     code: {
//       "fontFamily": "source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\tmonospace"
//     },
//     primary: {
//       "background": "rgb(112, 112, 223)",
//       "color": "white"
//     },
//     btn: {
//       "borderRadius": "0.25rem",
//       "border": "0",
//       "padding": "0 1.5rem",
//       "lineHeight": "5vh",
//       "margin": "0.5rem auto",
//       "fontWeight": "bold",
//       "cursor": "pointer",
//       "display": "inline-block",
//       "width": "6.5rem",
//       "boxShadow": "0 2px 2px 0.1px grey",
//       "fontFamily": "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
//     },
//     btn_hover: {
//       "boxShadow": "none"
//     },
//     btn_focus: {
//       "boxShadow": "none"
//     },
//     App: {
//       "display": "block",
//       "width": "100%",
//       "height": "100vh"
//     },
//     App_hover: {
//       "cursor": "url('addcursor.png'),crosshair"
//     },
//     round: {
//       "borderRadius": "50%",
//       "width": "7vh",
//       "height": "7vh",
//       "background": "rgb(239, 239, 239)",
//       "boxShadow": "0.5px 0.5px 2px -1px grey",
//       "cursor": "default"
//     },
//     flex_col: {
//       "display": "flex",
//       "flexFlow": "column",
//       "justifyContent": "center",
//       "textAlign": "center"
//     },
//     head: {
//       "position": "absolute"
//     },
//     head__contain: {
//       "lineHeight": "7vh"
//     },
//     head_plus: {
//       "display": "none",
//       "fontSize": "3rem",
//       "lineHeight": "4rem"
//     },
//     head_minus_cont: {
//       "position": "relative"
//     },
//     head_minus: {
//       "display": "none",
//       "float": "right",
//       "margin": "calc(13% - 1.1rem)",
//       "background": "#fffdfd",
//       "width": "5vh",
//       "height": "5vh",
//       "lineHeight": "1.7vh",
//       "verticalAlign": "middle",
//       "color": "black",
//       "fontSize": "4rem",
//       "padding": "0.25rem",
//       "borderRadius": "50%"
//     },
//     head_check: {
//       "display": "none"
//     },
//     head_children: {
//       "transform": "scale(0)",
//       "transition": "0.3s",
//       "width": "5vw",
//       "height": "5vw",
//       "background": "white",
//       "borderRadius": "50%",
//       "position": "absolute",
//       "top": "calc(50% - 2.5vw)",
//       "left": "calc(50% - 2.5vw)"
//     },
//     head_children__child: {
//       "position": "absolute",
//       "top": "calc(50% - 2vw)",
//       "left": "calc(50% - 2vw)",
//       "width": "6vh",
//       "height": "6vh",
//       "borderRadius": "50%",
//       "background": "#f1f1f1",
//       "boxShadow": "0 0 2px 0.1px #9e9e9e",
//       "lineHeight": "2vh",
//       "zIndex": "25"
//     },
//     child_small: {
//       "position": "absolute",
//       "bottom": "0%",
//       "left": "50%",
//       "background": "white",
//       "borderRadius": "50%",
//       "padding": "0.5rem",
//       "textAlign": "center"
//     },
//     head_children__add_child: {
//       "display": "none",
//       "position": "absolute",
//       "top": "calc(50% - 2.5vh)",
//       "left": "calc(50% - 2.6vh)",
//       "fontSize": "4vh",
//       "zIndex": "5",
//       "background": "black",
//       "width": "3vh",
//       "height": "3vh",
//       "lineHeight": "2vh",
//       "color": "white",
//       "borderRadius": "50%",
//       "padding": "1vh",
//       "textAlign": "center"
//     },
//     head_children__child_p: {
//       "overflow": "hidden",
//       "whiteSpace": "nowrap",
//       "textOverflow": "ellipsis",
//       "zIndex": "35"
//     },
//     child_hover: {
//       "cursor": "pointer"
//     },
//     p_tog_checked_label_p: {
//       "minWidth": "15vw",
//       "minHeight": "15vw",
//       "width": "auto",
//       "height": "auto",
//       "padding": "100%"
//     },
//     add_children: {
//       "width": "15vw",
//       "height": "15vw",
//       "background": "rgb(237, 233, 255)",
//       "verticalAlign": "middle",
//       "display": "flex",
//       "justifyContent": "center",
//       "flexFlow": "column",
//       "position": "absolute",
//       "top": "calc(50% - 7.5vw)",
//       "left": "calc(50% - 7.5vw)",
//       "borderRadius": "50%",
//       "transition": "0.4s",
//       "overflow": "unset",
//       "whiteSpace": "normal",
//       "wordBreak": "break-word"
//     },
//     p_tog_checked_label: {
//       "zIndex": "75"
//     },
//     head_check_checked__head_children: {
//       "transform": "scale(1)",
//       "boxShadow": "0 0 43px 4px",
//       "zIndex": "20"
//     },
//     head_check_checked__head_children__add_child: {
//       "display": "block"
//     },
//     head_check_checked__head_children__head_minus: {
//       "display": "block",
//       "zIndex": "25"
//     },
//     head_check_checked__head_plus: {
//       "display": "none !important"
//     },
//     head_hover__contain__head_plus: {
//       "display": "block",
//       "lineHeight": "4vw"
//     },
//     head_hover__contain_head_data: {
//       "display": "none"
//     },
//     color: {
//       "width": "1.5rem",
//       "height": "1.5rem",
//       "display": "inline-block"
//     },
//     color_radio: {
//       "display": "none"
//     },
//     color_radio_checked_label: {
//       "width": "2rem",
//       "height": "2rem",
//       "border": "1px solid black"
//     },
//     pop_check: {
//       "display": "none"
//     },
//     pop_check_checked_label: {
//       "display": "flex"
//     },
//     pop: {
//       "display": "none",
//       "width": "100%",
//       "height": "100%",
//       "margin": "auto",
//       "fontSize": "2rem",
//       "background": "#38383881",
//       "zIndex": "50",
//       "overflow": "hidden",
//       "position": "fixed",
//       "top": "0",
//       "left": "0",
//       "cursor": "default"
//     },
//     pop_label: {
//       "width": "100%",
//       "height": "100%"
//     },
//     pop_body_label: {
//       "width": "100%",
//       "height": "100%"
//     },
//     pop_body: {
//       "padding": "0.5rem",
//       "width": "30vw",
//       "height": "30vw",
//       "boxShadow": "0 0 5px 0.1px grey",
//       "margin": "auto"
//     },
//     // pop_body_form_nth_of_type_1: {},
//     // "sign_div_form_nth_of_type_2: {,
//     // "sign_btn_checked_form: 
//     //   "display": "flex !important"
//     // },
//     signup_checked__sign_up: {
//       "background": "blue"
//     },
//     login_checked__log_in: {
//       "background": "blue"
//     },
//     sign_cont: {
//       "display": "flex",
//       "width": "100%",
//       "height": "100%"
//     },
//     sign_div: {
//       "width": "100%",
//       "height": "100%",
//       "justifyContent": "space-between"
//     },
//     sign_up: {
//       "width": "auto",
//       "height": "auto",
//       "display": "inline-block",
//       "zIndex": "50"
//     },
//     log_in: {
//       "width": "auto",
//       "height": "auto",
//       "display": "inline-block",
//       "zIndex": "50"
//     },
//     sign_cont_form: {
//       "background": "url('bk.png') no-repeat center",
//       "backgroundSize": "cover",
//       "width": "100%",
//       "height": "100%",
//       "position": "absolute",
//       "top": "0",
//       "left": "0"
//     },
//     sign_cont_form_div: {
//       "background": "url('signup.png')  no-repeat center",
//       "backgroundSize": "contain",
//       "width": "55%",
//       "height": "100%",
//       "position": "relative",
//       "margin": "auto"
//     },
//     login_form_div: {
//       "background": "url('login.png')  no-repeat center",
//       "backgroundSize": "contain"
//     },
//     form_div_div: {
//       "position": "absolute",
//       "width": "28%",
//       "top": "29%",
//       "left": "27.5%",
//       "transform": "skewY(-30deg)",
//       "maxHeight": "60%",
//       "margin": "8vh 0%"
//     },
//     form_div_div_input: {
//       "display": "block",
//       "width": "70%",
//       "padding": "7%",
//       "border": "2px solid white",
//       "borderRadius": "15px",
//       "margin": "2vh auto",
//       "background": "transparent",
//       "color": "white"
//     },
//     form_div_div_div: {
//       "position": "relative"
//     },
//     form_div_div__btn: {
//       "background": "rgb(255, 255, 255)",
//       "color": "rgb(118, 105, 238)",
//       "fontSize": "1.1rem",
//       "textAlign": "center"
//     },
//     form_div_div_label: {
//       "display": "block",
//       "position": "absolute",
//       "color": "white",
//       "top": "calc(30%)",
//       "left": "calc(13%)",
//       "padding": "0 0.5vw",
//       "fontSize": "1rem"
//     },
//     form_div_div_input_focus_label: {
//       "transformOrigin": "left",
//       "transform": "scale(0.8) translateY(calc(-140%))",
//       "color": "white",
//       "background": "#4a7aff"
//     },
//     form_div_div_input_valid_label: {
//       "transformOrigin": "left",
//       "transform": "scale(0.8) translateY(calc(-140%))",
//       "color": "white",
//       "background": "#4a7aff"
//     },
//     // @media only screen and (max-width: 900px): {
//     //   "__expression__": "only screen and (max-width: 900px)",
//     //   "body: {
//     //     "overflow": "auto"
//     //   },
//     //   "html: {
//     //     "overflow": "auto"
//     //   },
//     //   "root: {
//     //     "overflow": "auto"
//     //   },
//     //   "round: {
//     //     "width": "4rem",
//     //     "height": "4rem"
//     //   },
//     //   "head__contain: {
//     //     "lineHeight": "4rem"
//     //   },
//     //   "head_children__child: {
//     //     "width": "3rem",
//     //     "height": "3rem",
//     //     "top": "calc(50% - 1.5rem)",
//     //     "left": "calc(50% - 1.5rem)",
//     //     "lineHeight": "1rem"
//     //   },
//     //   "head_hover__contain__head_plus: {
//     //     "lineHeight": "3.2rem"
//     //   },
//     //   "p_tog_checked_label_p: {
//     //     "width": "8rem",
//     //     "height": "8rem",
//     //     "top": "calc(50% - 3rem)",
//     //     "left": "calc(50% - 3rem)"
//     //   },
//     //   "add_children: {
//     //     "width": "8rem",
//     //     "height": "8rem",
//     //     "top": "calc(50% - 3rem)",
//     //     "left": "calc(50% - 3rem)"
//     //   }
//     // },
//     // @media only screen and (max-width: 650px): {
//     //   "__expression__": "only screen and (max-width: 650px)",
//     //   "sign_cont_form_div: {
//     //     "width": "100%",
//     //     "height": "60%",
//     //     "top": "0%",
//     //     "left": "0%"
//     //   },
//     //   "form_div_div: {
//     //     "top": "auto",
//     //     "bottom": "calc(17% - 7vh)",
//     //     "left": "calc(20% + 6.5vw)",
//     //     "transform": "skewY(-30deg)",
//     //     "width": "30%"
//     //   },
//     //   "form_div_div_input: {
//     //     "width": "80%",
//     //     "padding": "5%",
//     //     "margin": "1rem auto"
//     //   },
//     //   "form_div_div_label: {
//     //     "top": "17%",
//     //     "left": "1rem",
//     //     "fontSize": "3.5vw"
//     //   },
//     //   "form_div_div__btn: {
//     //     "padding": "0 0.5rem",
//     //     "width": "auto",
//     //     "fontSize": "1rem"
//     //   },
//     //   "form_div_div_input_focus_label: {
//     //     "transform": "scale(0.8) translateY(calc(-100%))"
//     //   },
//     //   "form_div_div_input_valid_label: {
//     //     "transform": "scale(0.8) translateY(calc(-100%))"
//     //   }
//     // }
//   })