<?php 

function university_register_search(){
  register_rest_route('university/v1', 'search', array(
    'methods' => WP_REST_SERVER::READABLE,  //the same as GET
    'callback' => 'universitySearchResults'
  ));
}
add_action('rest_api_init', 'university_register_search');

function universitySearchResults($data){
  $professors = new WP_Query(array(
    'post_type' => 'professor',
    's' => sanitize_text_field($data['term'] )     // s stands for search, sanitize prevent against suspicius code
  ));

  $professorResults = array();
  while($professors->have_posts()){
    $professors->the_post();
    array_push($professorResults, array(
      'title' => get_the_title(),
      'permalink' => get_the_permalink()
    ));
  }

  return $professorResults;
}