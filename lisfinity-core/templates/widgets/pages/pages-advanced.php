<?php
/**
 * Template Name: Widget | Pages
 * Description: The file that is being used to display various pages in a list
 *
 * @author pebas
 * @package templates/widgets
 * @version 1.0.0
 *
 * @var $args
 * @var $instance
 */
?>

<?php if ( ! empty( $instance['pages'] ) ) : ?>
    <ul class="flex flex-col -mb-8">
		<?php foreach ( $instance['pc_pages'] as $page ) : ?>
			<?php $title = get_the_title( $page['page'] ); ?>
			<?php $link = get_permalink( $page['page'] ); ?>
            <li class="mt-8">
                <a href="<?php echo esc_url( $link ); ?>" class="text-base text-grey-500 hover:text-white"><?php echo esc_html( $title ); ?></a>
            </li>
		<?php endforeach; ?>
    </ul>
<?php endif; ?>
