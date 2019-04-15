<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	function __construct(){
		parent::__construct();	
		
	}

	public function index()
	{
        echo "관리자페이지";
		$this->load->view('/admin/main');
	}
}
