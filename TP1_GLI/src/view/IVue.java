package view;
import controller.IController;

public interface IVue {

	void buildGraphics();

	void setController(IController c);
	
	void deSelect();
	
	void nextPie();
	
	void previousPie();
	
	void selectPie(int i);
	
	
	
}
