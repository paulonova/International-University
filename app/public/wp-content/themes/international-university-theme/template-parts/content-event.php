

<div class="event-summary">
  <a class="event-summary__date t-center" href="<?php the_permalink();?>">
    <span class="event-summary__month"><?php 
      $eventDate = new DateTime(get_field('event_date', false, false)); // Need to have false, false..
      echo $eventDate->format('M');
    ?></span>
    <span class="event-summary__day"><?php echo $eventDate->format('d');?></span>  
  </a>
  <div class="event-summary__content">
    <h5 class="event-summary__title headline headline--tiny"><a href="<?php the_permalink();?>"><?php the_title();?></a></h5>
      
      <!-- Check if there is excerpt or not -->
      <p><?php if(has_excerpt()):?>
          <?php echo get_the_excerpt() . '...';?>
        <?php else:?>
          <?php echo wp_trim_words( get_the_content(), 18, '...' );?>
        <?php endif;?>
        <a href="<?php the_permalink();?>" class="nu gray">Read more</a>
      </p>

  </div>
</div>