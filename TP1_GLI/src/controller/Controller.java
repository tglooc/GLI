package controller;

import model.CamembertModel;
import view.CamembertView;

public class Controller implements IController {

	private boolean isSelected;
	private int selectedPie;
	private CamembertView view;
	private CamembertModel model;

	public Controller(CamembertModel model) {
		this.model = model;
	}

	@Override
	public boolean isSelected() {
		return isSelected;
	}

	@Override
	public void setSelected(boolean b) {
		isSelected = b;
	}

	@Override
	public int getSelectedPie() {
		return selectedPie;
	}

	@Override
	public void setSelectedPie(int i) {
		this.selectedPie = i;
		view.repaint();
	}

	@Override
	public void deSelect() {
		isSelected = false;
		view.repaint();
	}

	@Override
	public void selectPie(int i) {
		isSelected = true;
		selectedPie = i;
		this.view.repaint();
	}

	@Override
	public void nextPie() {
		this.selectedPie = (this.selectedPie + 1) % model.size();
		this.view.repaint();
	}

	@Override
	public void previousPie() {
		this.selectedPie = (this.selectedPie + model.size() - 1) % model.size();
		this.view.repaint();
	}

	public CamembertView getView() {
		return view;
	}

	public void setView(CamembertView view) {
		this.view = view;
	}

	public CamembertModel getModel() {
		return model;
	}

	public void setModel(CamembertModel model) {
		this.model = model;
	}
	

}
