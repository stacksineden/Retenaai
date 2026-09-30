/* ============================================================================
 * Ad portfolio
 * ============================================================================
 * The 94 ads carried over from the old product's lookbook (pin_cat), in the
 * order they were catalogued. Generated from docs/ads-labelling.csv so the
 * sheet the intern fills in and this file can't drift apart.
 *
 * Keys are the Cloudinary asset id — stable, unlike position — and they're
 * what content/ads.labels.json is keyed on.
 *
 * An ad only ever appears when it has a label there with published: true.
 * See docs/HOW-TO-LABEL-ADS.md.
 * ========================================================================== */

import { adLabels, type AdLabel } from "../content";

export type Ad = {
  /** Cloudinary asset key — the stable id labels are keyed on. */
  key: string;
  url: string;
  category: string;
  title: string;
  type: "video" | "image";
  label: AdLabel;
};

const ALL_ADS: Omit<Ad, "label">[] = [
  // face_serum
  { key: "face-facts-asset2_u8sjim", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779190171/face-facts-asset2_u8sjim.png", category: "face_serum", title: "FACE SERUM CAMPAIGN", type: "image" },
  { key: "face-facts-assets3_zsg9aa", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779190171/face-facts-assets3_zsg9aa.png", category: "face_serum", title: "FACE SERUM CAMPAIGN", type: "image" },
  { key: "face-facts-ad1_hds0vl", url: "https://res.cloudinary.com/dast35q6f/video/upload/v1779190107/face-facts-ad1_hds0vl.mp4", category: "face_serum", title: "FACE SERUM CAMPAIGN", type: "video" },
  { key: "face-facts-asset1_tflbn6", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779190166/face-facts-asset1_tflbn6.png", category: "face_serum", title: "FACE SERUM CAMPAIGN", type: "image" },
  { key: "face-facts-ugc1_msgmcs", url: "https://res.cloudinary.com/dast35q6f/video/upload/v1779190140/face-facts-ugc1_msgmcs.mov", category: "face_serum", title: "FACE SERUM CAMPAIGN", type: "video" },
  { key: "face-facts-assets5_vwzz4b", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779195053/face-facts-assets5_vwzz4b.png", category: "face_serum", title: "FACE SERUM CAMPAIGN", type: "image" },
  { key: "face-facts-assets4_qoxzfj", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779194724/face-facts-assets4_qoxzfj.png", category: "face_serum", title: "FACE SERUM CAMPAIGN", type: "image" },

  // men_supplements
  { key: "wellman-ad1_kdx73g", url: "https://res.cloudinary.com/dast35q6f/video/upload/v1779191359/wellman-ad1_kdx73g.mp4", category: "men_supplements", title: "MEN SUPPLEMENTS CAMPAIGN", type: "video" },
  { key: "wellman-asset3_m9mylo", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779198612/wellman-asset3_m9mylo.png", category: "men_supplements", title: "MEN SUPPLEMENTS CAMPAIGN", type: "image" },
  { key: "wellman-asset1_q7btle", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779198601/wellman-asset1_q7btle.png", category: "men_supplements", title: "MEN SUPPLEMENTS CAMPAIGN", type: "image" },
  { key: "wellman-ugc1_k9mhfp", url: "https://res.cloudinary.com/dast35q6f/video/upload/v1779191693/wellman-ugc1_k9mhfp.mp4", category: "men_supplements", title: "MEN SUPPLEMENTS CAMPAIGN", type: "video" },
  { key: "wellman-asset2_yk8kmk", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779198663/wellman-asset2_yk8kmk.png", category: "men_supplements", title: "MEN SUPPLEMENTS CAMPAIGN", type: "image" },
  { key: "wellman-ugc-1-chineese_u6zyaq", url: "https://res.cloudinary.com/dast35q6f/video/upload/v1779191948/wellman-ugc-1-chineese_u6zyaq.mp4", category: "men_supplements", title: "MEN SUPPLEMENTS CAMPAIGN", type: "video" },

  // hair_curler
  { key: "curlumi-ad3_w0ppoy", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1781594807/curlumi-ad3_w0ppoy.png", category: "hair_curler", title: "HAIR CURLER CAMPAIGN", type: "image" },
  { key: "curlumi-ad5_uhuhlr", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1781594810/curlumi-ad5_uhuhlr.png", category: "hair_curler", title: "HAIR CURLER CAMPAIGN", type: "image" },
  { key: "curlumi-ad2_mnwekb", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1781594835/curlumi-ad2_mnwekb.png", category: "hair_curler", title: "HAIR CURLER CAMPAIGN", type: "image" },
  { key: "curlumi-ad1_nbt6px", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1781594840/curlumi-ad1_nbt6px.png", category: "hair_curler", title: "HAIR CURLER CAMPAIGN", type: "image" },
  { key: "curlumi-ad4_ovqs8x", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1781594917/curlumi-ad4_ovqs8x.png", category: "hair_curler", title: "HAIR CURLER CAMPAIGN", type: "image" },
  { key: "curlumi-ugc_kwuf0o", url: "https://res.cloudinary.com/dyryfgjro/video/upload/v1781595420/curlumi-ugc_kwuf0o.mov", category: "hair_curler", title: "HAIR CURLER CAMPAIGN", type: "video" },

  // jersey
  { key: "wrth3_mtkyat", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197847/wrth3_mtkyat.png", category: "jersey", title: "JERSEY CAMPAIGN", type: "image" },
  { key: "wrth8_ys1vxg", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197853/wrth8_ys1vxg.png", category: "jersey", title: "JERSEY CAMPAIGN", type: "image" },
  { key: "wrth7_cedazq", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197857/wrth7_cedazq.png", category: "jersey", title: "JERSEY CAMPAIGN", type: "image" },
  { key: "wrth-ad2_vnqekn", url: "https://res.cloudinary.com/dast35q6f/video/upload/v1779190666/wrth-ad2_vnqekn.mp4", category: "jersey", title: "JERSEY CAMPAIGN", type: "video" },
  { key: "wrth2_slxdql", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197857/wrth2_slxdql.png", category: "jersey", title: "JERSEY CAMPAIGN", type: "image" },
  { key: "wrth6_le0l56", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197863/wrth6_le0l56.png", category: "jersey", title: "JERSEY CAMPAIGN", type: "image" },
  { key: "wrth5_u73eud", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197895/wrth5_u73eud.png", category: "jersey", title: "JERSEY CAMPAIGN", type: "image" },
  { key: "wrth-ad1_rdbexo", url: "https://res.cloudinary.com/dast35q6f/video/upload/v1779190216/wrth-ad1_rdbexo.mov", category: "jersey", title: "JERSEY CAMPAIGN", type: "video" },
  { key: "wrth4_g4fxwt", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197956/wrth4_g4fxwt.png", category: "jersey", title: "JERSEY CAMPAIGN", type: "image" },

  // varsity_jacket
  { key: "wrth9_dhnss2", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197872/wrth9_dhnss2.png", category: "varsity_jacket", title: "VARSITY JACKET CAMPAIGN", type: "image" },
  { key: "wrth14_psdhcn", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197876/wrth14_psdhcn.png", category: "varsity_jacket", title: "VARSITY JACKET CAMPAIGN", type: "image" },
  { key: "wrth12_gdfr1l", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197877/wrth12_gdfr1l.png", category: "varsity_jacket", title: "VARSITY JACKET CAMPAIGN", type: "image" },
  { key: "wrth10_zhodmd", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197882/wrth10_zhodmd.png", category: "varsity_jacket", title: "VARSITY JACKET CAMPAIGN", type: "image" },
  { key: "wrth15_hiodyu", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197887/wrth15_hiodyu.png", category: "varsity_jacket", title: "VARSITY JACKET CAMPAIGN", type: "image" },
  { key: "wrth-set-ugc_b3orw8", url: "https://res.cloudinary.com/dast35q6f/video/upload/v1779190943/wrth-set-ugc_b3orw8.mov", category: "varsity_jacket", title: "VARSITY JACKET CAMPAIGN", type: "video" },
  { key: "wrth18_bwmos5", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197886/wrth18_bwmos5.png", category: "varsity_jacket", title: "VARSITY JACKET CAMPAIGN", type: "image" },
  { key: "wrth17_ciqxut", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197891/wrth17_ciqxut.png", category: "varsity_jacket", title: "VARSITY JACKET CAMPAIGN", type: "image" },

  // tshirts
  { key: "men_tshirt8_ln4k4c", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1763818582/men_tshirt8_ln4k4c.png", category: "tshirts", title: "TSHIRTS CAMPAIGN", type: "image" },
  { key: "men_tshirtad1_ejs88w", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1763819461/men_tshirtad1_ejs88w.png", category: "tshirts", title: "TSHIRTS CAMPAIGN", type: "image" },
  { key: "men_tshirt9_arkh9p", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1763818633/men_tshirt9_arkh9p.png", category: "tshirts", title: "TSHIRTS CAMPAIGN", type: "image" },
  { key: "men_tshirt3_aaax15", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1763812732/men_tshirt3_aaax15.png", category: "tshirts", title: "TSHIRTS CAMPAIGN", type: "image" },
  { key: "archive5_kyn25y", url: "https://res.cloudinary.com/dyryfgjro/video/upload/v1771431785/archive5_kyn25y.mov", category: "tshirts", title: "TSHIRTS CAMPAIGN", type: "video" },

  // chilli_sauce
  { key: "Generated_Image_September_05_2025_-_7_09PM_xeizaf", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779200376/Generated_Image_September_05_2025_-_7_09PM_xeizaf.jpg", category: "chilli_sauce", title: "CHILLI SAUCE CAMPAIGN", type: "image" },
  { key: "Generated_Image_September_05_2025_-_7_26PM_jqmfqv", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779200377/Generated_Image_September_05_2025_-_7_26PM_jqmfqv.jpg", category: "chilli_sauce", title: "CHILLI SAUCE CAMPAIGN", type: "image" },
  { key: "Generated_Image_September_05_2025_-_7_19PM_lzw8wr", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779200378/Generated_Image_September_05_2025_-_7_19PM_lzw8wr.jpg", category: "chilli_sauce", title: "CHILLI SAUCE CAMPAIGN", type: "image" },

  // twopieces
  { key: "mv-demo4_dxuwgy", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1771332039/mv-demo4_dxuwgy.png", category: "twopieces", title: "TWOPIECES CAMPAIGN", type: "image" },
  { key: "mv-demo9_x6ptiu", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1771332215/mv-demo9_x6ptiu.png", category: "twopieces", title: "TWOPIECES CAMPAIGN", type: "image" },
  { key: "mv-demo12_bnrhcy", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1771332287/mv-demo12_bnrhcy.png", category: "twopieces", title: "TWOPIECES CAMPAIGN", type: "image" },
  { key: "mv-demo8_om3wsv", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1774510024/mv-demo8_om3wsv.png", category: "twopieces", title: "TWOPIECES CAMPAIGN", type: "image" },
  { key: "mv-land1_blf6vb", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1774510129/mv-land1_blf6vb.jpg", category: "twopieces", title: "TWOPIECES CAMPAIGN", type: "image" },
  { key: "mv-ig_eyl4se", url: "https://res.cloudinary.com/dyryfgjro/video/upload/v1774510214/mv-ig_eyl4se.mov", category: "twopieces", title: "TWOPIECES CAMPAIGN", type: "video" },

  // sauce
  { key: "d6gkk0rdh88e5xqkgy1j_aursf0", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779199736/d6gkk0rdh88e5xqkgy1j_aursf0.webp", category: "sauce", title: "SAUCE CAMPAIGN", type: "image" },
  { key: "dlvgndhysd0eap95esdu_q9j2lv", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779199765/dlvgndhysd0eap95esdu_q9j2lv.webp", category: "sauce", title: "SAUCE CAMPAIGN", type: "image" },
  { key: "goods1_ycdnnc", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779199890/goods1_ycdnnc.webp", category: "sauce", title: "SAUCE CAMPAIGN", type: "image" },
  { key: "pfzlhz8lyfqjxrnskfug_icx18j", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779199905/pfzlhz8lyfqjxrnskfug_icx18j.webp", category: "sauce", title: "SAUCE CAMPAIGN", type: "image" },

  // shoe
  { key: "ads3_xtw1iv", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1771410999/ads3_xtw1iv.png", category: "shoe", title: "SHOE CAMPAIGN", type: "image" },
  { key: "ads14_ibcrxk", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1771411002/ads14_ibcrxk.png", category: "shoe", title: "SHOE CAMPAIGN", type: "image" },
  { key: "izzy-land_iwdkga", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1774514043/izzy-land_iwdkga.jpg", category: "shoe", title: "SHOE CAMPAIGN", type: "image" },

  // hoodie
  { key: "ads4_iyfvrn", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1774514991/ads4_iyfvrn.png", category: "hoodie", title: "HOODIE CAMPAIGN", type: "image" },
  { key: "ads7_vydhpr", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1774515586/ads7_vydhpr.png", category: "hoodie", title: "HOODIE CAMPAIGN", type: "image" },
  { key: "ads10_clqrp7", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1774515885/ads10_clqrp7.png", category: "hoodie", title: "HOODIE CAMPAIGN", type: "image" },
  { key: "ads12_ibjexf", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1774515917/ads12_ibjexf.png", category: "hoodie", title: "HOODIE CAMPAIGN", type: "image" },
  { key: "ads16_adyqmu", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1774516030/ads16_adyqmu.png", category: "hoodie", title: "HOODIE CAMPAIGN", type: "image" },
  { key: "vg-landscape_opjmje", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1774516109/vg-landscape_opjmje.jpg", category: "hoodie", title: "HOODIE CAMPAIGN", type: "image" },
  { key: "viding1_hkga82", url: "https://res.cloudinary.com/dyryfgjro/video/upload/v1774516143/viding1_hkga82.mp4", category: "hoodie", title: "HOODIE CAMPAIGN", type: "video" },

  // home_decor
  { key: "decor1_exmbv0", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779200161/decor1_exmbv0.png", category: "home_decor", title: "HOME DECOR CAMPAIGN", type: "image" },
  { key: "decor3_rgpjzx", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779200178/decor3_rgpjzx.png", category: "home_decor", title: "HOME DECOR CAMPAIGN", type: "image" },
  { key: "decor2_abyozz", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779200179/decor2_abyozz.png", category: "home_decor", title: "HOME DECOR CAMPAIGN", type: "image" },

  // female_gymwear
  { key: "rove-demo1_ydq0w2", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1775807371/rove-demo1_ydq0w2.jpg", category: "female_gymwear", title: "FEMALE GYMWEAR CAMPAIGN", type: "image" },
  { key: "rove-demo4_dn4jbq", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1775807376/rove-demo4_dn4jbq.jpg", category: "female_gymwear", title: "FEMALE GYMWEAR CAMPAIGN", type: "image" },
  { key: "rove-vid2_gwpglb", url: "https://res.cloudinary.com/dyryfgjro/video/upload/v1775896819/rove-vid2_gwpglb.mp4", category: "female_gymwear", title: "FEMALE GYMWEAR CAMPAIGN", type: "video" },
  { key: "rove-demo2_gfjo8z", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1775807381/rove-demo2_gfjo8z.jpg", category: "female_gymwear", title: "FEMALE GYMWEAR CAMPAIGN", type: "image" },
  { key: "rove-demo5_xgensd", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1775807382/rove-demo5_xgensd.jpg", category: "female_gymwear", title: "FEMALE GYMWEAR CAMPAIGN", type: "image" },
  { key: "rove-demo8_wubmrx", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1775807383/rove-demo8_wubmrx.jpg", category: "female_gymwear", title: "FEMALE GYMWEAR CAMPAIGN", type: "image" },
  { key: "rove-vid3_myukx5", url: "https://res.cloudinary.com/dyryfgjro/video/upload/v1775896817/rove-vid3_myukx5.mp4", category: "female_gymwear", title: "FEMALE GYMWEAR CAMPAIGN", type: "video" },
  { key: "rove-demo9_kgtskb", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1775807393/rove-demo9_kgtskb.jpg", category: "female_gymwear", title: "FEMALE GYMWEAR CAMPAIGN", type: "image" },
  { key: "rove-demo3_nbtoxa", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1775807393/rove-demo3_nbtoxa.jpg", category: "female_gymwear", title: "FEMALE GYMWEAR CAMPAIGN", type: "image" },
  { key: "rove-vid6_u2rhct", url: "https://res.cloudinary.com/dyryfgjro/video/upload/v1775896853/rove-vid6_u2rhct.mp4", category: "female_gymwear", title: "FEMALE GYMWEAR CAMPAIGN", type: "video" },
  { key: "rove-demo6_vbfe2v", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1775807397/rove-demo6_vbfe2v.jpg", category: "female_gymwear", title: "FEMALE GYMWEAR CAMPAIGN", type: "image" },
  { key: "rove-landp_nz9hsh", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1775807399/rove-landp_nz9hsh.jpg", category: "female_gymwear", title: "FEMALE GYMWEAR CAMPAIGN", type: "image" },
  { key: "rove-demo7_ri28ha", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1775807400/rove-demo7_ri28ha.jpg", category: "female_gymwear", title: "FEMALE GYMWEAR CAMPAIGN", type: "image" },
  { key: "rove-reel-3-min_m2hohq", url: "https://res.cloudinary.com/dyryfgjro/video/upload/v1775821123/rove-reel-3-min_m2hohq.mov", category: "female_gymwear", title: "FEMALE GYMWEAR CAMPAIGN", type: "video" },

  // men_slide
  { key: "ad4_uifb2d", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197401/ad4_uifb2d.png", category: "men_slide", title: "MEN SLIDE CAMPAIGN", type: "image" },
  { key: "ad2_grirmf", url: "https://res.cloudinary.com/dast35q6f/video/upload/v1779197401/ad2_grirmf.mp4", category: "men_slide", title: "MEN SLIDE CAMPAIGN", type: "video" },
  { key: "ad3_ci9xgk", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197402/ad3_ci9xgk.png", category: "men_slide", title: "MEN SLIDE CAMPAIGN", type: "image" },
  { key: "ad9_lo7lx4", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197402/ad9_lo7lx4.png", category: "men_slide", title: "MEN SLIDE CAMPAIGN", type: "image" },
  { key: "ad1_q1xs0f", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197404/ad1_q1xs0f.png", category: "men_slide", title: "MEN SLIDE CAMPAIGN", type: "image" },
  { key: "ad7_fs1bi0", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197407/ad7_fs1bi0.png", category: "men_slide", title: "MEN SLIDE CAMPAIGN", type: "image" },
  { key: "ad8_jmwuzg", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197407/ad8_jmwuzg.png", category: "men_slide", title: "MEN SLIDE CAMPAIGN", type: "image" },
  { key: "ad6_zbn8eq", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197408/ad6_zbn8eq.png", category: "men_slide", title: "MEN SLIDE CAMPAIGN", type: "image" },
  { key: "ad5_kbrtwm", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779197461/ad5_kbrtwm.png", category: "men_slide", title: "MEN SLIDE CAMPAIGN", type: "image" },

  // food_cusine
  { key: "food1_fdtoil", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779200260/food1_fdtoil.png", category: "food_cusine", title: "FOOD CUSINE CAMPAIGN", type: "image" },
  { key: "food2_dhp0ry", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779200268/food2_dhp0ry.png", category: "food_cusine", title: "FOOD CUSINE CAMPAIGN", type: "image" },
  { key: "food3_d0klxy", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779200275/food3_d0klxy.png", category: "food_cusine", title: "FOOD CUSINE CAMPAIGN", type: "image" },
  { key: "food4_ibbgrd", url: "https://res.cloudinary.com/dast35q6f/image/upload/v1779200278/food4_ibbgrd.png", category: "food_cusine", title: "FOOD CUSINE CAMPAIGN", type: "image" },

  // uplift_pro
  { key: "a-uplift-pro-ugc-final_dbarsd", url: "https://res.cloudinary.com/dyryfgjro/video/upload/v1790668307/a-uplift-pro-ugc-final_dbarsd.mov", category: "uplift_pro", title: "UPLIFT PRO CAMPAIGN", type: "video" },
  { key: "uplift-pro-ad1_tru0pd", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1790668353/uplift-pro-ad1_tru0pd.png", category: "uplift_pro", title: "UPLIFT PRO CAMPAIGN", type: "image" },
  { key: "uplift-pro-ad2_xfjsjk", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1790668365/uplift-pro-ad2_xfjsjk.png", category: "uplift_pro", title: "UPLIFT PRO CAMPAIGN", type: "image" },
  { key: "uplift-pro-ad3_mdnsau", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1790668376/uplift-pro-ad3_mdnsau.png", category: "uplift_pro", title: "UPLIFT PRO CAMPAIGN", type: "image" },
  { key: "Uplift-pro-ugc_epeuhs", url: "https://res.cloudinary.com/dyryfgjro/video/upload/v1785833096/Uplift-pro-ugc_epeuhs.mov", category: "uplift_pro", title: "UPLIFT PRO CAMPAIGN", type: "video" },

  // macbite
  { key: "kiosk-front_kya2pn", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1790773126/kiosk-front_kya2pn.png", category: "macbite", title: "MACBITE CAMPAIGN", type: "image" },
  { key: "ChatGPT_Image_Sep_9_2026_01_07_07_PM_lqs0kh", url: "https://res.cloudinary.com/dyryfgjro/image/upload/v1790773155/ChatGPT_Image_Sep_9_2026_01_07_07_PM_lqs0kh.png", category: "macbite", title: "MACBITE CAMPAIGN", type: "image" },
];

/**
 * Cloudinary does the resizing, so a grid never pulls a full-size asset.
 * Leaves any non-Cloudinary URL alone.
 */
export function optimize(url: string, context: "grid" | "full"): string {
  if (!url.includes("/upload/")) return url;
  const [base, rest] = url.split("/upload/");
  if (context === "grid") return `${base}/upload/w_600,f_auto,q_auto/${rest}`;
  return `${base}/upload/w_1600,f_auto,q_auto/${rest}`;
}

/**
 * Playable video URL, at a chosen width.
 *
 * Autoplaying tiles ask for a small render (w_600 is plenty for a grid cell),
 * so a homepage with three looping videos stays light. q_auto lets Cloudinary
 * pick the bitrate.
 */
export function adVideoSrc(url: string, width = 600): string {
  const mp4 = url.replace(/\.mov$/i, ".mp4");
  if (!mp4.includes("/upload/")) return mp4;
  const [base, rest] = mp4.split("/upload/");
  return `${base}/upload/w_${width},q_auto/${rest}`;
}

/**
 * Playable video URL.
 *
 * Seven of these are .mov, which Safari plays and Chrome often won't. Asking
 * Cloudinary for .mp4 makes it transcode on delivery, so every ad plays
 * everywhere without re-uploading anything.
 */
export function videoSrc(url: string): string {
  return url.replace(/\.mov$/i, ".mp4");
}

/** First frame of a video, for a poster image. */
export function videoPoster(url: string): string {
  if (!url.includes("/upload/")) return "";
  const [base, rest] = url.split("/upload/");
  return `${base}/upload/so_1,w_600,f_jpg,q_auto/${rest.replace(/\.(mp4|mov)$/i, ".jpg")}`;
}

/** Every ad, labelled or not — for the labelling sheet and counts. */
export const allAds = ALL_ADS;

/** Labelled and approved for display, in dataset order. */
export const publishedAds: Ad[] = ALL_ADS.flatMap((ad) => {
  const label = adLabels[ad.key];
  return label?.published ? [{ ...ad, label }] : [];
});

/** How an ad must be labelled on screen. */
export const adBadges = (label: AdLabel): string[] => {
  const badges = [label.client_or_sample === "client" ? "Client ad" : "Sample ad"];
  if (label.ai_presenter) badges.push("AI-generated presenter");
  return badges;
};
