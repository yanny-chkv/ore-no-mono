const upload_tags = [
    {
        "id":"00",
        "tags":"00",
    },
    {
        "id":"10740384",
        "tags":"copyright:jock_studio_(blits_games) 1boy multiple_views character:leo_mendez_(jock_studio) cum_in_ass jockstrap red_shorts american_football_uniform blonde_hair yellow_eyes blush patch short_hair male_focus clothes_grab elbow_pads short_sleeves idoraad "
    },
    {
        "id":'10741121',
        "tags":"legacy_zechs white_background satou_kotarou_(fairytale_police_hoe_department) fairytale_police_hoe_department dark_green_hair bottomless feet_out_of_frame white_gloves foreskin penis flaccid male_focus 1boy simple_background testicles thighs twitter_username smile brown_eyes pectorals nipples white_jacket leather_strap",
    },
    {
        "id":"10741594",
        "tags":"size_difference cum ejaculation idoraad green_hair fairytale_police_hoe_department otoko_no_ko bara beard open_clothes black_footwear ahegao closed_eyes blue_hair short_hair green_hair cum cum_in_ass hands_on_another's_hips hands_on_another's_arms satou_kotarou_(fairytale_police_hoe_department) character:elijah_antaios",
    },
    {
        "id":"10742022",
        "tags":"idoraad 正太 large_penis size_difference cum_in_mouth abs pectorals dark_skin blonde_hair reverto_(monster_hunter_stories) monster_hunter_(series) ryuuto_(monster_hunter_stories) monster_hunter_stories 2boys yaoi navel leather_strap detached_sleeves single_arm_hug hand_on_another's_penis handjob goggles_on_head goggles",
    },
    {
        "id":"10742718",
        "tags":"idoraad meitantei_conan 3boys kudou_shin'ichi hattori_heiji kaitou_kid 3boys french_kiss tongue_out saliva saliva_drip blush closed_eyes open_mouth brown_hair short_hair fangs hair_between_eyes holding_card yaoi male_focus collared_shirt white_shirt looking_at_another blurry_background heart_background hand_on_another's_back hand_on_another's_shoulder ",
    },
    {
        "id":"00",
        "tags":"00",
    },
    ];
/*
    {
        "id":"00",
        "tags":"00",
    },
*/
const currentupldid = window.location.href.split("/")[4];

upload_tags.forEach(item=>{
    if(item.id==currentupldid)
    {
        console.log(item.tags);
        document.getElementById('post_tag_string').value=item.tags;
    }
})
