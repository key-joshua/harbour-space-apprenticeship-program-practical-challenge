export const EASE = "cubic-bezier(.22,.8,.24,1)";
export const STROKE = "#D9D9E6";
export const AUTOPLAY_MS = 6500;
export const RESPONSIVE_CSS = `
  .testimonial-stage {
    --stage-height: 470px; --pattern-height: 250px; --clip: polygon(0 0, 100% 0, 100% 55%, 0 55%);
    --card-top: 56px; --card-width: 100%; --card-height: 320px; --card-padding: 28px 24px;
    --quote-margin: 46px; --quote-size: 19px; --pill-top: 78px; --arrow-offset: 4px;
    --side-left: -60%; --side-right: 160%; --side-width: 100%; --side-scale: .92; --side-opacity: 0; --side-pointer: none; --arrow-left: 4px; --arrow-right: 4px;
  }
  @media (min-width: 768px) {
    .testimonial-stage { --stage-height: 380px; --pattern-height: 270px; --clip: polygon(0 0, 100% 0, 100% 100%, 74% 100%, 74% 46%, 26% 46%, 26% 100%, 0 100%); --card-top: 60px; --card-width: 56%; --card-height: 290px; --card-padding: 30px 32px; --quote-margin: 34px; --quote-size: 17px; --side-left: 9%; --side-right: 91%; --side-width: 18%; --side-opacity: .6; --side-pointer: auto; --arrow-left: -20px; --arrow-right: -20px; }
  }
  @media (min-width: 1024px) {
    .testimonial-stage { --card-width: 50%; --side-left: 10.5%; --side-right: 89.5%; --side-width: 21%; }
  }
`;
