<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	function __construct(){
		parent::__construct();	
		
	}

	public function index()
	{

		$this->load->view('/admin/common/include/header');
		$this->load->view('/admin/common/include/top_menu');
		$this->load->view('/admin/common/include/side_menu');
		$this->load->view('/admin/common/include/smallHeader');
		$this->load->view('/admin/main');
		$this->load->view('/admin/common/include/footer');
	}
}
